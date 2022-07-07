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

	@Autowired
	   OpenWordService openWordService;
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

		// �겢�씪�씠�뼵�듃�쓽 �씠硫붿씪�씠 議댁옱�븷 �븣 �꽭�뀡�뿉 �빐�떦 �씠硫붿씪怨� �넗�겙 �벑濡�
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
			System.out.println(kakaoDto.getUserId() + " ========= 占쏙옙 占쏙옙 占쏙옙");
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

	// 臾몄옣 寃��깋
	@PostMapping("/searchWord")
	public List<String> paraphraseCheck2(@RequestBody Map<String, String> body) {
		List<String> list = new ArrayList<>();
		list = searchWordService.paraphraseCheck(body);
		return list;
	}

	// �븳援��뼱 湲곗큹�궗�쟾 API�샇異�
	@GetMapping("/oneWord")
	public List<WordItemDto> oneWord(@RequestParam String q) {

		List<WordItemDto> list = new ArrayList<>();
		list = searchWordService.oneWord(q);
		return list;
	}

	// �굹留뚯쓽 �떒�뼱�옣 遺덈윭�삤湲�
	@GetMapping("/myPage")
	public List<VocabularyNoteDto> myPage() {
		List<VocabularyNoteDto> list = new ArrayList<>();
		list = vocabularyService.myPage(loginId);

		return list;
	}

	// �떒�뼱�옣�뿉 異붽�
	@GetMapping("/addToNote")
	public void addToNote(@RequestParam String q, @RequestParam String p) {
		vocabularyService.addToNote(loginId, q, p);
	}

	// �떒�뼱�옣�뿉�꽌 �떒�뼱 �궘�젣
	@GetMapping("/deleteFromNote")
	public List<VocabularyNoteDto> deleteFromNote(@RequestParam String word) {
		List<VocabularyNoteDto> list = new ArrayList<>();
		list = vocabularyService.deleteFromNote(loginId, word);
		return list;
	}

	// �삤�뵂�궗�쟾�뿉�꽌 �궘�젣
		@PostMapping("/deleteFromOpen")
		public void deletetoOpen(@RequestBody Map<String, Integer> body) {
			System.out.println(body.get("id")); // �솗�씤�슜
			openWordService.deleteFromOpen(body);
		}

		// �삤�뵂�궗�쟾�뿉�꽌 遺덈윭�삤湲�
		@GetMapping("/loadFromOpen")
		public List<OpenWordDto> loadtoOpen() {
			List<OpenWordDto> list = new ArrayList<>();
			list = openWordService.loadtoOpen(loginId);
			return list;
		}

		// 紐⑤뱺 �삤�뵂�궗�쟾 遺덈윭�삤湲�
		@GetMapping("/loadAllOpen")
		public List<OpenWordDto> loadAllOpen() {
			return openWordService.loadAllOpen();
		}

		// �삤�뵂�궗�쟾�뿉�꽌 移댄뀒怨좊━濡� �궘�젣
		@GetMapping("/deleteOpenCategory")
		public void deletetoOpen(@RequestParam String category) {
			openWordService.deletetoOpen(loginId, category);
		}	
}