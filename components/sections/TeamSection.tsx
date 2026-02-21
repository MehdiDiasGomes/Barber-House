import { teamData } from '@/constants/team';
import { Container } from '@/components/ui/Container';
import { TeamCard } from '@/components/ui/TeamCard';

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-bg-primary">
      <Container>
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-text-secondary mb-4">
            Notre Équipe
          </p>
          <h2 className="mb-6">Nos Barbiers Professionnels</h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre équipe d&apos;experts passionnés par leur métier, chacun apportant
            son expérience et son savoir-faire pour garantir une expérience de barbering
            de première qualité. Nos barbiers sont formés aux techniques les plus modernes
            et traditionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
