import React from 'react';
import '../styles/index.css'

function BusinessInfo () {
    return (
        <div className='bsnsBox'>
            <table>
                <tr>
                    <td className='title'>통신판매번호</td>
                    <td>2022-울산중구-00221</td>
                    <td className='title'>사업자등록번호</td>
                    <td>120-88-22325</td>
                </tr>
                <tr>
                    <td className='title'>신고현황</td>
                    <td>통신판매업 신고</td>
                    <td className='title'>법인여부</td>
                    <td>법인</td>
                </tr>
                <tr>
                    <td className='title'>상호</td>
                    <td>(주)프론트</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='title'>대표자명</td>
                    <td>LEE YEEUN</td>
                    <td className='title'>대표 전화번호</td>
                    <td>02-1599-5319</td>
                </tr>
                <tr>
                    <td className='title'>판매방식</td>
                    <td>인터넷</td>
                    <td className='title'>취급품목</td>
                    <td>기타</td>
                </tr>
                <tr>
                    <td className='title'>전자우편(E-mail)</td>
                    <td>support@gmail.com</td>
                    <td className='title'>신고일자</td>
                    <td>20220314</td>
                </tr>
                <tr>
                    <td className='title'>사업장소재지</td>
                    <td>울산광역시 중구 다운동 세영이노세븐</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='title'>사업장소재지(도로명)</td>
                    <td>울산광역시 중구 다운동 561-7 2층</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='title'>인터넷도메인</td>
                    <td>www.itezfront.com</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='title'>호스트서버소재지</td>
                    <td>울산광역시 어딘가</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className='title'>통신판매업 신고기관명</td>
                    <td>울산광역시청</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div className='bsnsFooter'>
            본자료는 전자상거래시장에서 소비자가 정확한 사업자 정보를 가지고 안전한 거래를 할 수 있도록 전국 시,군,구에 신고된 통신판매업자의 신원정보를 전자상거래소비자보 호법 제12조4항 에 따라 제공하는 정보입니다. 사업자 정보에 대한 궁금한 사항이나 사업자의 신원정보가 정보공개 내용과 불일치할 경우에는 사업자 정보검색시 확인되는 해당 신고기관(지방자치단체)에 문의하여 주시기 바랍니다.<br/>
            </div>
            <div className='bsnsFooter'>
            일부 사업자의 경우, 부가가치세법상 사업자 폐업 신고는 하였으나 전자상거래법상 통신판매업 폐업 신고는 하지 않은 사례가 있을 수 있습니다. 소비자 피해를 방지하기 위해 부가가치세법상 사업자 폐업 여부도 국세청 홈택스 페이지(www.hometax.go.kr)의 사업자등록상태조회 코너를 통해 확인하시기 바랍니다. [바로가기 링크]
            </div>
        </div>
    );
}
export default BusinessInfo;