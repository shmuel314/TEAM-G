import QuestionBoard from '../common/QuestionBoard'
function Test() {
    return <>
        <QuestionBoard />
        <RatingAndScore wpm={120} std={5} compScore={9} />
    </>
}

export default Test;
