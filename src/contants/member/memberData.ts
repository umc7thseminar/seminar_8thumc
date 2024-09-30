import { Part } from "@/interfaces/member/memberBox";

export const MEMBERS = [
    {
        nickname: "닉네임", /// 본인의 닉네임
        name: "이름", /// 본인의 이름
        part: Part.운영진, /// 본인의 파트
        profile_img_url: "/assets/images/members/default_profile_img.png", /// 본인의 프로필 사진, 동일한 경로로 설정해주세요.
        title: "description", /// 본인의 한 줄 소개
        redirect_url: "https://github.com", /// 프로필 클릭 시 이동할 경로
    },
]