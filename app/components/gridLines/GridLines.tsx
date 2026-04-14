// components/GridLines.tsx
import Container from "../container/container";

const GridLines = () => {
    return (
        <div className="fixed inset-0 z-99 pointer-events-none ">
            <Container className="h-full overflow-hidden" innerClassName="h-full">
                <div className="grid grid-cols-11 h-full gap-6">
                    {Array.from({ length: 11 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-full bg-[#EBEEF3]/30 last:border-r-0"
                        >
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default GridLines;