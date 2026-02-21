import Image from 'next/image';
import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const { name, role, bio, image } = member;

  return (
    <div className="relative w-full aspect-[2/3] border border-gray-200 overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md flex flex-col">
        <h4 className="mb-2 text-text-light">{name}</h4>
        <p className="text-secondary text-sm font-semibold mb-4">{role}</p>
        <p className="text-text-light text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
