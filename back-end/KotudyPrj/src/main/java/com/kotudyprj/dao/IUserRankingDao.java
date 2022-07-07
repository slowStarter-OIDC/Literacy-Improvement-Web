package com.kotudyprj.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.kotudyprj.dto.UserRankingDto;

@Mapper
public interface IUserRankingDao {

	// user_ranking ���̺� ������� ���� ����
	public void createRankingInfo(Object userId, Object nickName, Object image);

	// user_ranking ���̺� PRIMARY_KEY �ߺ� Ȯ��
	public String checkRankingUserId(Object userId);

	// user_ranking ���̺� ���� Ȯ��
	public int selectQuizRanking(@Param("_userId") String userId);

	// user_ranking ���̺� ���� ����
	public void getQuizResult(@Param("_userId") String userId, @Param("_point") int point);

	// user_ranking 10�� �̾ƿ���
	public List<Object> userRankingPoint();

	public List<UserRankingDto> userRankingUserId();

	public List<Object> userRankingImage();
}