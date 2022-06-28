package com.kotudyprj.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.kotudyprj.dto.UserRankingDto;

@Mapper
public interface IUserRankingDao {
   
   // user_ranking ?��?��블에 ?��?��?��?�� ?���? ?��?��user_ranking ?��?��블에 ?��?��?��?�� ?���? ?��?��
   public void createRankingInfo(Object userId, Object nickName, Object image);
   
   // user_ranking ?��?���? PRIMARY_KEY 중복 ?��?��
   public String checkRankingUserId(Object userId);
   
   // user_ranking ?��?���? ?���? ?��?��
   public int selectQuizRanking(@Param("_userId") String userId);
   
   // user_ranking ?��?���? ?���? �?�?
   public void getQuizResult(@Param("_userId") String userId, @Param("_point") int point);
   
   // user_ranking 10�? 뽑아?���?
   public List<Object> userRankingPoint();
    public List<UserRankingDto> userRankingUserId();
    public List<Object> userRankingImage();
}
