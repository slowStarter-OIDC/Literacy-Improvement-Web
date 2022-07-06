import MyOpenDictionary from "../components/organism/page-openDictionary/myDictionaryPage";
import Seo from "../components/seo/Seo";

export default function myOpenDictionary() {

    return (
        <div>
            <Seo title="오픈사전"></Seo>
            <MyOpenDictionary></MyOpenDictionary>
        </div>
    )
}