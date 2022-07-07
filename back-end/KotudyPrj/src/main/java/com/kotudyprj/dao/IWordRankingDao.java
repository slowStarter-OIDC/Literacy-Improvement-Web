package com.kotudyprj.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.kotudyprj.dto.WordRankingDto;

@Mapper
public interface IWordRankingDao {

	// insert into
	public void wordRankingInsert(@Param("_word") String word, @Param("_mean") String mean);

	// word_ranking���̺� ���ϴ� word�ִ��� Ȯ��
	public int wordRankingSelect(@Param("_word") String word);

	// point����
	public void wordRankingUp(@Param("_word") String word);

	// point����
	public void wordRankingDown(@Param("_word") String word);

	// delete �÷�
	public void wordRankingDelete(@Param("_word") String word);

	// word rank������
	public List<Object> wordRankingWord();

	public List<Object> wordRankingPoint();

	public List<WordRankingDto> wordall();
}