package com.kotudyprj.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.kotudyprj.dto.UserRankingDto;

@Mapper
public interface IUserRankingDao {
   
   // user_ranking ??΄λΈμ ?¬?©?? ? λ³? ??±user_ranking ??΄λΈμ ?¬?©?? ? λ³? ??±
   public void createRankingInfo(Object userId, Object nickName, Object image);
   
   // user_ranking ??΄λΈ? PRIMARY_KEY μ€λ³΅ ??Έ
   public String checkRankingUserId(Object userId);
   
   // user_ranking ??΄λΈ? ? λ³? ??Έ
   public int selectQuizRanking(@Param("_userId") String userId);
   
   // user_ranking ??΄λΈ? ? λ³? λ³?κ²?
   public void getQuizResult(@Param("_userId") String userId, @Param("_point") int point);
   
   // user_ranking 10κ°? λ½μ?€κΈ?
   public List<Object> userRankingPoint();
    public List<UserRankingDto> userRankingUserId();
    public List<Object> userRankingImage();
}
