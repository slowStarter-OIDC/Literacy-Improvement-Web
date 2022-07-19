package com.kotudyprj.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.kotudyprj.dto.OpenWordDto;

@Mapper
public interface IOpenWordDao {
   // ���»����� �߰�
   public void addtoOpendic(@Param("_userId") String userId, @Param("_word") String word, @Param("_mean") String mean, @Param("_morpheme") String morpheme, @Param("_category") String category);
   // ���»������� ����
   public void deletetoOpendic(@Param("_id") int id);
   // ���»��� �ҷ�����
   public List<OpenWordDto> loadtoOpendic(@Param("_userId") String userId);
   public List<OpenWordDto> loadAllOpendic();
   public void deletetoOpencategory(@Param("_userId") String userId,@Param("_category") String category);
}