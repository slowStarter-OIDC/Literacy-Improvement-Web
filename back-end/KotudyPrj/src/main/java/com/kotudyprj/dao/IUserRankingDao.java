package com.kotudyprj.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.kotudyprj.dto.UserRankingDto;

@Mapper
public interface IUserRankingDao {
   
   // user_ranking ?…Œ?´ë¸”ì— ?‚¬?š©??˜ ? •ë³? ?ƒ?„±user_ranking ?…Œ?´ë¸”ì— ?‚¬?š©??˜ ? •ë³? ?ƒ?„±
   public void createRankingInfo(Object userId, Object nickName, Object image);
   
   // user_ranking ?…Œ?´ë¸? PRIMARY_KEY ì¤‘ë³µ ?™•?¸
   public String checkRankingUserId(Object userId);
   
   // user_ranking ?…Œ?´ë¸? ? •ë³? ?™•?¸
   public int selectQuizRanking(@Param("_userId") String userId);
   
   // user_ranking ?…Œ?´ë¸? ? •ë³? ë³?ê²?
   public void getQuizResult(@Param("_userId") String userId, @Param("_point") int point);
   
   // user_ranking 10ê°? ë½‘ì•„?˜¤ê¸?
   public List<Object> userRankingPoint();
    public List<UserRankingDto> userRankingUserId();
    public List<Object> userRankingImage();
}
