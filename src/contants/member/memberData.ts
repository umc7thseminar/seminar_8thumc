import { Part } from "@/interfaces/member/memberBox";

export const MEMBERS = [
  {
    nickname: "몽환",
    name: "김민환",
    part: Part.SPRINGBOOT,
    profile_img_url: "/assets/images/members/내동생.jpeg",
    title: "안녕하세요. umc 김민환입니다. :)",
    redirect_url: "https://github.com/rlaalsghks8",
  },
  {
    nickname: "닉네임", /// 본인의 닉네임
    name: "이름", /// 본인의 이름
    part: Part.운영진, /// 본인의 파트
    profile_img_url: "/assets/images/members/default_profile_img.png", /// 본인의 프로필 사진, 동일한 경로로 설정해주세요.
    title: "description", /// 본인의 한 줄 소개
    redirect_url: "https://github.com", /// 프로필 클릭 시 이동할 경로
  },
  {
    nickname: "은별",
    name: "정은지",
    part: Part.운영진,
    profile_img_url: "/assets/images/members/eunji_profile.png",
    title: "안녕하세요. umc 부회장 정은지입니다. :)",
    redirect_url: "https://github.com/bianbbc87",
  },
  {
    nickname: "헤쌀", /// 본인의 닉네임
    name: "이주형", /// 본인의 이름
    part: Part.WEB, /// 본인의 파트
    profile_img_url: "/assets/images/members/juhyung_profile_img.png", /// 본인의 프로필 사진, 동일한 경로로 설정해주세요.
    title: "밥은 먹고 다니는 개발자가 되려 합니다", /// 본인의 한 줄 소개
    redirect_url: "https://github.com/mangang0713", /// 프로필 클릭 시 이동할 경로
  },
  {
    nickname: "지지", /// 본인의 닉네임
    name: "이지희", /// 본인의 이름
    part: Part.운영진, /// 본인의 파트
    profile_img_url: "/assets/images/members/jiji.jpg", /// 본인의 프로필 사진, 동일한 경로로 설정해주세요.
    title: "안녕!!!!하세요!!!!", /// 본인의 한 줄 소개
    redirect_url: "https://github.com/munjji", /// 프로필 클릭 시 이동할 경로
  },
];
