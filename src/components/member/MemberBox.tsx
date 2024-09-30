import { Member } from '@/interfaces/member/memberBox';
import Image from 'next/image';
import Link from 'next/link';

const MemberBox = ({ member }: { member: Member }) => {
  const borderColor = () => {
    switch (member.part) {
      case '운영진':
        return 'border-pastel-red';
      case 'SPRINGBOOT':
        return 'border-pastel-green';
      case 'WEB':
        return 'border-pastel-blue';
      case 'ANDROID':
        return 'border-pastel-yellow';
      case 'PLAN':
        return 'border-pastel-purple';
      case 'DESIGN':
        return 'border-pastel-pink';
      default:
        return 'border-pastel-gray';
    }
  };

  return (
    <Link href={member.redirect_url} target="_blank" rel="noopener noreferrer" className="block">
    <div className={`relative w-full overflow-hidden rounded-sm group border-4 ${borderColor()}`} style={{ paddingTop: '100%' }}>
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={!member.profile_img_url ? "/assets/images/members/default_profile_img.png": member.profile_img_url}
        alt={`${member.name}의 프로필 사진`}
        layout="fill"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex flex-col justify-end p-4">
        <div className="text-white opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="flex flex-col">
            <div className="text-xl font-semibold mr-2 leading-tight">{member.name}</div>
            <div className="text-sm font-light text-gray-200 mt-1">{member.part}</div>
          </div>
          <div className="text-xs mt-2">{member.title}</div>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default MemberBox;