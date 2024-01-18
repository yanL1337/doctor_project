import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <section className="flex py-5  justify-center  ">
      <div className="grid grid-cols-3 rounded-box gap-3">
        <CategoryItem
          path={"./src/assets/brain_icon.svg"}
          text={"Neurologie"}
        />

        <CategoryItem path={"./src/assets/dna_icon.svg"} text={"Virologie"} />

        <CategoryItem path={"./src/assets/dentist.svg"} text={"Zahnarzt"} />
      </div>
    </section>
  );
};

export default Category;
