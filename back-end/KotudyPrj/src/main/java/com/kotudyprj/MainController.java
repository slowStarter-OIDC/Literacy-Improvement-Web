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
import com.kotudyprj.dto.QuizTemplateDto;
import com.kotudyprj.dto.VocabularyNoteDto;
import com.kotudyprj.dto.WordItemDto;
import com.kotudyprj.dto.WordRankingDto;
import com.kotudyprj.dto.WordsDto;
import com.kotudyprj.service.DailyWordService;
import com.kotudyprj.service.KakaoAPI;
import com.kotudyprj.service.OpenWordService;
import com.kotudyprj.service.QuizService;
import com.kotudyprj.service.RankingService;
import com.kotudyprj.service.SearchWordService;
import com.kotudyprj.service.VocabularyService;
import com.kotudyprj.dto.UserRankingDto;
import com.kotudyprj.dto.OpenWordDto;

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
	QuizService quizService;

	@Autowired
	RankingService rankingService;

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

		// ???????????????????????????????????? ????????????????????? ??????????????? ?????? ?????????????????? ???????????? ????????????????????? ???????????? ????????????
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
			System.out.println(kakaoDto.getUserId() + " =========??????????????????");
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

	// ????????????
	@PostMapping("/searchWord")
	public List<String> paraphraseCheck2(@RequestBody Map<String, String> body) {
		List<String> list = new ArrayList<>();
		list = searchWordService.paraphraseCheck(body);
		return list;
	}

	// ???????????? api ??????
	@GetMapping("/oneWord")
	public List<WordItemDto> oneWord(@RequestParam String q) {

		List<WordItemDto> list = new ArrayList<>();
		list = searchWordService.oneWord(q);
		return list;
	}

	// ??????????????? ????????????
	@GetMapping("/myPage")
	public List<VocabularyNoteDto> myPage() {
		List<VocabularyNoteDto> list = new ArrayList<>();
		list = vocabularyService.myPage(loginId);

		return list;
	}

	// ????????? ??????
	@GetMapping("/addToNote")
	public void addToNote(@RequestParam String q, @RequestParam String p) {
		vocabularyService.addToNote(loginId, q, p);
	}

	// ???????????? ??????
	@GetMapping("/deleteFromNote")
	public List<VocabularyNoteDto> deleteFromNote(@RequestParam String word) {
		List<VocabularyNoteDto> list = new ArrayList<>();
		list = vocabularyService.deleteFromNote(loginId, word);
		return list;
	}

	// ????????????
	@GetMapping("/wordQuiz")
	public List<QuizTemplateDto> wordQuiz() {
		System.out.println("wordQUiz ????????????");
		List<QuizTemplateDto> list = new ArrayList<>();
		list = quizService.wordQuiz();
		return list;
	}

	// ???????????? ??????
	@PostMapping("/postQuizResult")
	public void getQuizResult(@RequestBody Map<String, Integer> body) {
		quizService.getQuizResult(loginId, body);
	}

	// ???????????? ??????
	@PostMapping("/wordRank")
	public List<WordRankingDto> wordRank() {
		List<WordRankingDto> list = new ArrayList<>();
		list = rankingService.wordRank();
		return list;
	}

	// user ranking ??????
	@PostMapping("/userRank")
	public List<UserRankingDto> userRank(KakaoDto kakaoDto) {
		List<UserRankingDto> link = new ArrayList<>();
		link = rankingService.userRank(kakaoDto);
		return link;
	}

	// ??????????????? ??????
	@GetMapping("/addToOpen")
	public void addtoOpen(@RequestParam String word, @RequestParam String mean, @RequestParam String morpheme,
			@RequestParam String category) {
		openWordService.addToOpen(loginId, word, mean, morpheme, category);
	}

	// ???????????? ??????
	@PostMapping("/deleteFromOpen")
	public void deletetoOpen(@RequestBody Map<String, Integer> body) {
		System.out.println(body.get("id")); // ??????????????????
		openWordService.deleteFromOpen(body);
	}

	// ???????????? ????????????
	@GetMapping("/loadFromOpen")
	public List<OpenWordDto> loadtoOpen() {
		List<OpenWordDto> list = new ArrayList<>();
		list = openWordService.loadtoOpen(loginId);
		return list;
	}

	// ???????????? ?????? ??????
	@GetMapping("/loadAllOpen")
	public List<OpenWordDto> loadAllOpen() {
		return openWordService.loadAllOpen();
	}

	// ?????????????????? ??????
	@GetMapping("/deleteOpenCategory")
	public void deletetoOpen(@RequestParam String category) {
		openWordService.deletetoOpen(loginId, category);
	}
}