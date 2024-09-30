export enum Part {
    운영진 = '운영진',
    SPRINGBOOT = 'SPRINGBOOT',
    WEB = 'WEB',
    ANDROID = 'ANDROID',
    PLAN = 'PLAN',
    DESIGN = 'DESIGN',
  }
  
export interface Member {
    nickname: string;
    name: string;
    part: Part;
    profile_img_url: string;
    title: string;
    redirect_url: string;
}