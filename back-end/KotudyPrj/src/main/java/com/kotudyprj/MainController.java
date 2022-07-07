package com.kotudyprj;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kotudyprj.dao.IKakaoDao;
import com.kotudyprj.dao.IUserRankingDao;
import com.kotudyprj.dto.KakaoDto;
import com.kotudyprj.dto.VocabularyNoteDto;
import com.kotudyprj.dto.WordItemDto;
import com.kotudyprj.dto.WordsDto;
import com.kotudyprj.service.DailyWordService;
import com.kotudyprj.service.KakaoAPI;
import com.kotudyprj.service.SearchWordService;
import com.kotudyprj.service.VocabularyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainController {
// Service
	@Autowired
	DailyWordService dailyWordService;

	@Autowired
	SearchWordService searchWordService;

	@Autowired
	VocabularyService vocabularyService;

// DAO
	@Autowired
	IKakaoDao iKakaoDao;

	@Autowired
	KakaoAPI kakaoAPI;

	@Autowired
	IUserRankingDao iUserRankingDao;

	HttpSession loginId;

	@RequestMapping("/")
	public String root() throws Exception {

		return "";
	}

	@GetMapping("/kakaoAuth")
	public Object kakaoLogin(@RequestParam String code, HttpServletRequest req, KakaoDto kakaoDto) {

		// 클라이언트의 이메일이 존재할 때 세션에 해당 이메일과 토큰 등록
		HttpSession session = req.getSession(true);
		String access_Token = kakaoAPI.getAccessToken(code);
		HashMap<String, Object> userInfo = kakaoAPI.getUserInfo(access_Token);
		// System.out.println("login Controller : " + userInfo);

		if (userInfo.get("email") != null) {

			kakaoDto.setUserId(userInfo.get("email"));
			kakaoDto.setNickName(userInfo.get("nickname"));
			kakaoDto.setImage(userInfo.get("profile_image"));

			iKakaoDao.registerDao(kakaoDto.getUserId(), kakaoDto.getNickName(), kakaoDto.getImage());
			// if (iUserRankingDao.checkRankingUserId(kakaoDto.getUserId()) == null) {
			iUserRankingDao.createRankingInfo(kakaoDto.getUserId(), kakaoDto.getNickName(), kakaoDto.getImage());
			// }
			System.out.println(kakaoDto.getUserId() + " ========= �� �� ��");
			List check = iKakaoDao.loginDao(kakaoDto.getUserId());
			loginId = req.getSession();
			loginId.setAttribute("userId", kakaoDto.getUserId());

		}
		System.out.println(loginId.getAttribute("userId"));
		return loginId.getAttribute("userId");
	}

	@PostMapping("/kakaoLogout")
	public String logout() {

		loginId.removeAttribute("userId");
		return "index";
	}

	@GetMapping("/dailyWords")
	public List<WordsDto> dailyWords(WordsDto wordsDto) {
		List<WordsDto> list = new ArrayList<>();
		list = dailyWordService.dailyWords(wordsDto);
		return list;

	}

	// 문장 검색
	@PostMapping("/searchWord")
	public List<String> paraphraseCheck2(@RequestBody Map<String, String> body) {
		List<String> list = new ArrayList<>();
		list = searchWordService.paraphraseCheck(body);
		return list;
	}

	// 한국어 기초사전 API호출
	@GetMapping("/oneWord")
	public List<WordItemDto> oneWord(@RequestParam String q) {

		List<WordItemDto> list = new ArrayList<>();
		list = searchWordService.oneWord(q);
		return list;
	}

	// 나만의 단어장 불러오기
	@GetMapping("/myPage")
	public List<VocabularyNoteDto> myPage() {
		List<VocabularyNoteDto> list = new ArrayList<>();
		list = vocabularyService.myPage(loginId);

		return list;
	}

	// 단어장에 추가
	@GetMapping("/addToNote")
	public void addToNote(@RequestParam String q, @RequestParam String p) {
		vocabularyService.addToNote(loginId, q, p);
	}

	// 단어장에서 단어 삭제
	@GetMapping("/deleteFromNote")
	public List<VocabularyNoteDto> deleteFromNote(@RequestParam String word) {
		List<VocabularyNoteDto> list = new ArrayList<>();
		list = vocabularyService.deleteFromNote(loginId, word);
		return list;
	}

}