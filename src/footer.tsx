import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div>
                <div className="comnb">1599-5319</div>
                <div className="open">평일 10:00 - 18:00<br/>
                (점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</div>
            </div>
            <div>
            <Link to="/termsofUse" className="footElm">이용 약관</Link>
            <Link to="/privacy" className="footElm">개인정보처리방침</Link>
            <Link to="/businessInfo" className="footElm">사업자 정보</Link>
            </div>
            <div className="footerInfo">
                (주)프론트는 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
            </div>
            <div className="footerInfo">
                상호명:(주)프론트 · 대표이사:KIM ROBIN H · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층<br/>
                사업자등록번호:120-88-22325 · 통신판매업신고증:제 2015-서울강남-00567 호 · 직업정보제공사업 신고번호:서울청 제 2019-21호<br/>
                고객센터:1599-5319 · 이메일:support@soomgo.com<br/>
                Copyright ©Brave Mobile Inc. All Rights Reserved.<br/>
            </div>
        </div>
    );
}