package com.kotudyprj.dto;

import java.util.List;

import lombok.Data;

public class WordItemDto {
	
	private int target_code; // �ĺ� �ڵ�
	private String word; // ǥ����
	private String pronunciation; // ����
	private String pos; // ǰ��
	public List<WordSenseDto> sense; // �ǹ��� ����Ʈ
	
	public int getTarget_code() {
		return target_code;
	}
	public void setTarget_code(int target_code) {
		this.target_code = target_code;
	}
	public String getWord() {
		return word;
	}
	public void setWord(String word) {
		this.word = word;
	}
	public String getPronunciation() {
		return pronunciation;
	}
	public void setPronunciation(String pronunciation) {
		this.pronunciation = pronunciation;
	}
	public String getPos() {
		return pos;
	}
	public void setPos(String pos) {
		this.pos = pos;
	}
	public List<WordSenseDto> getSense() {
		return sense;
	}
	public void setSense(List<WordSenseDto> sense) {
		this.sense = sense;
	}
}
