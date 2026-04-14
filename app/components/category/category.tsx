import Title from "../title/title"
import CategoryCards from "./categoryCard"


const Category = () => {
    return (
        <section className="py-8 flex flex-col gap-6" id="category">
            <Title title="Category"/>
            <CategoryCards/>
        </section>
    )
}


export default Category