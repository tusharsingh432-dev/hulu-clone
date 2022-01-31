import ThumbNails from "./ThumbNails";

function Results({ results }) {
    return <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center">
        {
            results.map((result) => {
                return <ThumbNails key={result.id} result={result} />
            })
        }
    </div>;
}

export default Results;
