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
import com.kotudyprj.dto.WordItemDto;
import com.kotudyprj.dto.WordsDto;
import com.kotudyprj.service.DailyWordService;
import com.kotudyprj.service.KakaoAPI;
import com.kotudyprj.service.SearchWordService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainController {

   // Service
   @Autowired
   DailyWordService dailyWordService;

   @Autowired
   SearchWordService searchWordService;

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

      // Ŭ���̾�Ʈ�� �̸����� ������ �� ���ǿ� �ش� �̸��ϰ� ��ū ���
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

   // ���� �˻�
   @PostMapping("/searchWord")
   public List<String> paraphraseCheck2(@RequestBody Map<String, String> body) {
      List<String> list = new ArrayList<>();
      list = searchWordService.paraphraseCheck(body);
      return list;
   }

   // �ѱ��� ���ʻ��� APIȣ��
   @GetMapping("/oneWord")
   public List<WordItemDto> oneWord(@RequestParam String q) {

      List<WordItemDto> list = new ArrayList<>();
      list = searchWordService.oneWord(q);
      return list;
   }

}