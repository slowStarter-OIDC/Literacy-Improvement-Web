package com.kotudyprj.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Service
public class KakaoAPI {
   public String getAccessToken(String authorize_code) {
      String access_Token = "";
      String refresh_Token = "";
      String reqURL = "https://kauth.kakao.com/oauth/token";

      try {
         URL url = new URL(reqURL);
         HttpURLConnection conn = (HttpURLConnection) url.openConnection();

         // POST ��û�� ���� �⺻���� false�� setDoOutput�� true��
         conn.setRequestMethod("POST");
         conn.setDoOutput(true);

         // POST ��û�� �ʿ�� �䱸�ϴ� �Ķ���� ��Ʈ���� ���� ����
         BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
         StringBuilder sb = new StringBuilder();
         sb.append("grant_type=authorization_code");
         sb.append("&client_id=aa7d5c4d45ba0daae7f9d2891d4a293a");
         sb.append("&client_secret=ApVaYb6fEp7YDNlA3UYk4IbgPSoQgLpx");
         sb.append("&redirect_uri=http://localhost:3000/kakaoAuth");
         sb.append("&code=" + authorize_code);
         bw.write(sb.toString());
         bw.flush();

         // ��� �ڵ尡 200�̶�� ����
         int responseCode = conn.getResponseCode();
         System.out.println("responseCodelogin : " + responseCode);

         // ��û�� ���� ���� JSONŸ���� Response �޼��� �о����
         BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
         String line = "";
         String result = "";

         while ((line = br.readLine()) != null) {
            result += line;
         }
         System.out.println("response body login : " + result);

         // Gson ���̺귯���� ���Ե� Ŭ������ JSON�Ľ� ��ü ����
         JsonParser parser = new JsonParser();
         JsonElement element = parser.parse(result);

         access_Token = element.getAsJsonObject().get("access_token").getAsString();
         refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();

         System.out.println("access_token : " + access_Token);
         System.out.println("refresh_token : " + refresh_Token);

         br.close();
         bw.close();
      } catch (IOException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }

      return access_Token;
   }

   public HashMap<String, Object> getUserInfo(String access_Token) {

      // ��û�ϴ� Ŭ���̾�Ʈ���� ���� ������ �ٸ� �� �ֱ⿡ HashMapŸ������ ����
      HashMap<String, Object> userInfo = new HashMap<>();
      String reqURL = "https://kapi.kakao.com/v2/user/me";
      try {
         URL url = new URL(reqURL);
         HttpURLConnection conn = (HttpURLConnection) url.openConnection();
         conn.setRequestMethod("POST");

         // ��û�� �ʿ��� Header�� ���Ե� ����
         conn.setRequestProperty("Authorization", "Bearer " + access_Token);

         int responseCode = conn.getResponseCode();
         System.out.println("responseCode session : " + responseCode);

         BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
         Map<String, String> argument = new HashMap<>();
         String line = "";
         String result = "";

         while ((line = br.readLine()) != null) {
            result += line;
         }
         System.out.println("response body session : " + result);

         JsonParser parser = new JsonParser();
         JsonElement element = parser.parse(result);

         JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
         JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();
         // JsonObject test = element.getAsJsonObject().get("id").getAsJsonObject();

         // String id = test.getAsJsonObject().get("id").getAsString();
         String nickname = properties.getAsJsonObject().get("nickname").getAsString();
         String email = kakao_account.getAsJsonObject().get("email").getAsString();
         String image = properties.getAsJsonObject().get("profile_image").getAsString();
         userInfo.put("nickname", nickname);
         userInfo.put("email", email);
         userInfo.put("profile_image", image);
         // userInfo.put("id", id);

      } catch (IOException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }

      return userInfo;
   }

   public void kakaoLogout(String access_Token) {
      String reqURL = "https://kapi.kakao.com/v1/user/logout";
      try {
         URL url = new URL(reqURL);
         HttpURLConnection conn = (HttpURLConnection) url.openConnection();
         conn.setRequestMethod("POST");
         conn.setRequestProperty("Authorization", "Bearer " + access_Token);

         int responseCode = conn.getResponseCode();
         System.out.println("responseCode : " + responseCode);

         BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

         String result = "";
         String line = "";

         while ((line = br.readLine()) != null) {
            result += line;
         }
         System.out.println(result);
      } catch (IOException e) {
         // TODO Auto-generated catch block
         e.printStackTrace();
      }
   }
}