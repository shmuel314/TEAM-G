import PushUpTimer from '../../pages/TrainReading/PushUpTimer/index'
import Underline from '../../common/Underline';
import Questions from '../../pages/TrainReading/Questions';
import BookInfo from "../../common/BookInfo"
import Popup from "../layout/Popup/Popup"

function Test() {
    return <>
    <Questions/>
        <Popup />
      <PushupInstructions />
        <Questions />
    </>
}

export default Test;
