package com.kotudyprj.dto;

import lombok.Data;

public class WordSenseDto {
	
	private int sense_order; // sense�� ����
	private String definition; // sense�� �ǹ�
	
	public int getSense_order() {
		return sense_order;
	}
	public void setSense_order(int sense_order) {
		this.sense_order = sense_order;
	}
	public String getDefinition() {
		return definition;
	}
	public void setDefinition(String definition) {
		this.definition = definition;
	}
	
}