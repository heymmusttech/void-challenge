import { games } from "../../data/siteContent";
import { GameCard } from "../cards/GameCard";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";

export const GamesSection = () => {
  return (
    <section className="scroll-mt-24 bg-slate-50 py-20" id="games">
      <Container>
        <SectionHeading
          align="center"
          description="Des mécaniques éprouvées pour engager vos audiences"
          title="Catalogue de jeux"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {games.map((game) => (
            <GameCard game={game} key={game.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};
