import MemberBox from "@/components/member/MemberBox";
import { MEMBERS } from "@/contants/member/memberData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {MEMBERS.map((member, index) => (
          <MemberBox key={index} member={member} />
        ))}
      </div>
    </main>
  );
}
