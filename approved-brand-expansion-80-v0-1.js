(function attachApprovedBrandExpansion80V01(globalScope) {
  "use strict";

  const system = globalScope.COMMERCIAL_DNA_SYSTEM;
  if (!system || !Array.isArray(system.brandLibrary)) return;

  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.values(value).forEach(deepFreeze);
    return Object.freeze(value);
  }

  const extension = {
    "version": "approved-brand-expansion-80-v0.1",
    "approvedAt": "2026-08-31",
    "brands": [
      {
        "id": "brand-exp80-c-021",
        "name": "爱德面包坊",
        "city": "南京",
        "category": "社区与可持续",
        "subCategory": "社区与可持续",
        "brandRole": "南京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "南京",
          "社区与可持续",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-c-021-philosophy",
          "brand-exp80-c-021-store",
          "brand-exp80-c-021-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "南京"
      },
      {
        "id": "brand-exp80-c-026",
        "name": "龙凤旗袍（陕西北路旗舰店）",
        "city": "上海",
        "category": "社区与可持续",
        "subCategory": "社区与可持续",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "社区与可持续",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-c-026-philosophy",
          "brand-exp80-c-026-store",
          "brand-exp80-c-026-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-c-028",
        "name": "klee klee",
        "city": "上海",
        "category": "社区与可持续",
        "subCategory": "社区与可持续",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "社区与可持续",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-c-028-philosophy",
          "brand-exp80-c-028-store",
          "brand-exp80-c-028-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-d-032",
        "name": "Fabrica X（The Mills Shop 108）",
        "city": "香港",
        "category": "户外与循环生活",
        "subCategory": "户外与循环生活",
        "brandRole": "香港当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "香港",
          "户外与循环生活",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-d-032-philosophy",
          "brand-exp80-d-032-store",
          "brand-exp80-d-032-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "香港"
      },
      {
        "id": "brand-exp80-d-035",
        "name": "Rapha Shanghai Clubhouse",
        "city": "上海",
        "category": "户外与循环生活",
        "subCategory": "户外与循环生活",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "户外与循环生活",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-d-035-philosophy",
          "brand-exp80-d-035-store",
          "brand-exp80-d-035-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-d-037",
        "name": "ARC'TERYX Alpha Center Shanghai",
        "city": "上海",
        "category": "户外与循环生活",
        "subCategory": "户外与循环生活",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "户外与循环生活",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-d-037-philosophy",
          "brand-exp80-d-037-store",
          "brand-exp80-d-037-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-d-041",
        "name": "Nike 跑百巷 Run Hai Lane",
        "city": "上海",
        "category": "户外与循环生活",
        "subCategory": "户外与循环生活",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "户外与循环生活",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-d-041-philosophy",
          "brand-exp80-d-041-store",
          "brand-exp80-d-041-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-d-047",
        "name": "岩时攀岩 Gate M 西岸梦中心店",
        "city": "上海",
        "category": "户外与循环生活",
        "subCategory": "户外与循环生活",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "户外与循环生活",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-d-047-philosophy",
          "brand-exp80-d-047-store",
          "brand-exp80-d-047-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-d-050",
        "name": "PANE PLAZA Shanghai",
        "city": "上海",
        "category": "户外与循环生活",
        "subCategory": "户外与循环生活",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "户外与循环生活",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-d-050-philosophy",
          "brand-exp80-d-050-store",
          "brand-exp80-d-050-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-g-071",
        "name": "Cabana 北京三里屯旗舰店",
        "city": "北京",
        "category": "设计与生活方式",
        "subCategory": "设计与生活方式",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "设计与生活方式",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-g-071-philosophy",
          "brand-exp80-g-071-store",
          "brand-exp80-g-071-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-exp80-g-072",
        "name": "ICICLE SPACE 上海合川路旗舰空间",
        "city": "上海",
        "category": "设计与生活方式",
        "subCategory": "设计与生活方式",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "设计与生活方式",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-g-072-philosophy",
          "brand-exp80-g-072-store",
          "brand-exp80-g-072-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-g-073",
        "name": "Dover Street Market Beijing 王府井店",
        "city": "北京",
        "category": "设计与生活方式",
        "subCategory": "设计与生活方式",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "设计与生活方式",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-g-073-philosophy",
          "brand-exp80-g-073-store",
          "brand-exp80-g-073-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-exp80-g-074",
        "name": "SHANG XIA Maison 上海之家",
        "city": "上海",
        "category": "设计与生活方式",
        "subCategory": "设计与生活方式",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "设计与生活方式",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-g-074-philosophy",
          "brand-exp80-g-074-store",
          "brand-exp80-g-074-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-g-078",
        "name": "多少MoreLess 上海M50旗舰店",
        "city": "上海",
        "category": "设计与生活方式",
        "subCategory": "设计与生活方式",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "设计与生活方式",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-g-078-philosophy",
          "brand-exp80-g-078-store",
          "brand-exp80-g-078-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-g-079",
        "name": "Melt Season 上海太原路旗舰店",
        "city": "上海",
        "category": "设计与生活方式",
        "subCategory": "设计与生活方式",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "设计与生活方式",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-g-079-philosophy",
          "brand-exp80-g-079-store",
          "brand-exp80-g-079-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-g-080",
        "name": "RECLASSIFIED调香室 上生·新所旗舰店",
        "city": "上海",
        "category": "设计与生活方式",
        "subCategory": "设计与生活方式",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "设计与生活方式",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-g-080-philosophy",
          "brand-exp80-g-080-store",
          "brand-exp80-g-080-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-exp80-h-081",
        "name": "黄天源观前街店",
        "city": "苏州",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "苏州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "苏州",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-081-philosophy",
          "brand-exp80-h-081-store",
          "brand-exp80-h-081-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "苏州"
      },
      {
        "id": "brand-exp80-h-082",
        "name": "松鹤楼苏帮菜观前店",
        "city": "苏州",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "苏州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "苏州",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-082-philosophy",
          "brand-exp80-h-082-store",
          "brand-exp80-h-082-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "苏州"
      },
      {
        "id": "brand-exp80-h-085",
        "name": "桂发祥十八街麻花文化馆",
        "city": "天津",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "天津当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "天津",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-085-philosophy",
          "brand-exp80-h-085-store",
          "brand-exp80-h-085-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "天津"
      },
      {
        "id": "brand-exp80-h-086",
        "name": "耳朵眼会馆鼓楼店",
        "city": "天津",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "天津当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "天津",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-086-philosophy",
          "brand-exp80-h-086-store",
          "brand-exp80-h-086-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "天津"
      },
      {
        "id": "brand-exp80-h-089",
        "name": "陶陶居酒家第十甫路总店",
        "city": "广州",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "广州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "广州",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-089-philosophy",
          "brand-exp80-h-089-store",
          "brand-exp80-h-089-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "广州"
      },
      {
        "id": "brand-exp80-h-090",
        "name": "莲香楼第十甫路店",
        "city": "广州",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "广州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "广州",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-090-philosophy",
          "brand-exp80-h-090-store",
          "brand-exp80-h-090-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "广州"
      },
      {
        "id": "brand-exp80-h-092",
        "name": "广州酒家文昌总店",
        "city": "广州",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "广州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "广州",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-092-philosophy",
          "brand-exp80-h-092-store",
          "brand-exp80-h-092-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "广州"
      },
      {
        "id": "brand-exp80-h-097",
        "name": "永和鱼丸南后街店",
        "city": "福州",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "福州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "福州",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-097-philosophy",
          "brand-exp80-h-097-store",
          "brand-exp80-h-097-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "福州"
      },
      {
        "id": "brand-exp80-h-101",
        "name": "德华楼六渡桥店",
        "city": "武汉",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "武汉当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "武汉",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-101-philosophy",
          "brand-exp80-h-101-store",
          "brand-exp80-h-101-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "武汉"
      },
      {
        "id": "brand-exp80-h-102",
        "name": "火宫殿坡子街总店",
        "city": "长沙",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "长沙当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "长沙",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-102-philosophy",
          "brand-exp80-h-102-store",
          "brand-exp80-h-102-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "长沙"
      },
      {
        "id": "brand-exp80-h-105",
        "name": "钟水饺人民公园总店",
        "city": "成都",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "成都当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "成都",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-105-philosophy",
          "brand-exp80-h-105-store",
          "brand-exp80-h-105-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "成都"
      },
      {
        "id": "brand-exp80-h-106",
        "name": "陈麻婆豆腐骡马市店",
        "city": "成都",
        "category": "地域老字号",
        "subCategory": "地域老字号",
        "brandRole": "成都当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "成都",
          "地域老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-h-106-philosophy",
          "brand-exp80-h-106-store",
          "brand-exp80-h-106-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "成都"
      },
      {
        "id": "brand-expansion-20260830-011",
        "name": "胡庆余堂国药号（大井巷95号）",
        "city": "杭州",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "杭州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "杭州",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-011-philosophy",
          "brand-expansion-20260830-011-store",
          "brand-expansion-20260830-011-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "杭州"
      },
      {
        "id": "brand-expansion-20260830-012",
        "name": "方回春堂河坊街馆",
        "city": "杭州",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "杭州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "杭州",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-012-philosophy",
          "brand-expansion-20260830-012-store",
          "brand-expansion-20260830-012-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "杭州"
      },
      {
        "id": "brand-expansion-20260830-013",
        "name": "王星记旗舰店（河坊街店）",
        "city": "杭州",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "杭州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "杭州",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-013-philosophy",
          "brand-expansion-20260830-013-store",
          "brand-expansion-20260830-013-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "杭州"
      },
      {
        "id": "brand-expansion-20260830-014",
        "name": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
        "city": "杭州",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "杭州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "杭州",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-014-philosophy",
          "brand-expansion-20260830-014-store",
          "brand-expansion-20260830-014-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "杭州"
      },
      {
        "id": "brand-expansion-20260830-015",
        "name": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
        "city": "杭州",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "杭州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "杭州",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-015-philosophy",
          "brand-expansion-20260830-015-store",
          "brand-expansion-20260830-015-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "杭州"
      },
      {
        "id": "brand-expansion-20260830-018",
        "name": "内联升大栅栏总店",
        "city": "北京",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-018-philosophy",
          "brand-expansion-20260830-018-store",
          "brand-expansion-20260830-018-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-019",
        "name": "同仁堂知嘛健康零号店（大兴思邈路39号）",
        "city": "北京",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-019-philosophy",
          "brand-expansion-20260830-019-store",
          "brand-expansion-20260830-019-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-020",
        "name": "谢馥春馥园（东关街243号）",
        "city": "扬州",
        "category": "传统工艺与老字号",
        "subCategory": "传统工艺与老字号",
        "brandRole": "扬州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "扬州",
          "传统工艺与老字号",
          "完整入库"
        ],
        "fitDNA": [
          "LSBR",
          "LCME"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-020-philosophy",
          "brand-expansion-20260830-020-store",
          "brand-expansion-20260830-020-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "扬州"
      },
      {
        "id": "brand-expansion-20260830-051",
        "name": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
        "city": "上海",
        "category": "音乐现场",
        "subCategory": "音乐现场",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "音乐现场",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-051-philosophy",
          "brand-expansion-20260830-051-store",
          "brand-expansion-20260830-051-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-052",
        "name": "DDC 黄昏黎明俱乐部（神路街店）",
        "city": "北京",
        "category": "音乐现场",
        "subCategory": "音乐现场",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "音乐现场",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-052-philosophy",
          "brand-expansion-20260830-052-store",
          "brand-expansion-20260830-052-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-053",
        "name": "Blue Note Beijing（前门店）",
        "city": "北京",
        "category": "音乐现场",
        "subCategory": "音乐现场",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "音乐现场",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-053-philosophy",
          "brand-expansion-20260830-053-store",
          "brand-expansion-20260830-053-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-058",
        "name": "Heim Shanghai（长乐路 Green Station 店）",
        "city": "上海",
        "category": "音乐现场",
        "subCategory": "音乐现场",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "音乐现场",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-058-philosophy",
          "brand-expansion-20260830-058-store",
          "brand-expansion-20260830-058-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-069",
        "name": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
        "city": "上海",
        "category": "音乐现场",
        "subCategory": "音乐现场",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "音乐现场",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-069-philosophy",
          "brand-expansion-20260830-069-store",
          "brand-expansion-20260830-069-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-070",
        "name": "Wigwam Shanghai（C·PARK店）",
        "city": "上海",
        "category": "音乐现场",
        "subCategory": "音乐现场",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "音乐现场",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-070-philosophy",
          "brand-expansion-20260830-070-store",
          "brand-expansion-20260830-070-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-culture-001",
        "name": "先锋书店（五台山店）",
        "city": "南京",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "南京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "南京",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-001-philosophy",
          "brand-expansion-20260830-culture-001-store",
          "brand-expansion-20260830-culture-001-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "南京"
      },
      {
        "id": "brand-expansion-20260830-culture-002",
        "name": "旧天堂书店（Old Heaven Books）",
        "city": "深圳",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "深圳当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "深圳",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-002-philosophy",
          "brand-expansion-20260830-culture-002-store",
          "brand-expansion-20260830-culture-002-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "深圳"
      },
      {
        "id": "brand-expansion-20260830-culture-003",
        "name": "1200BOOKSHOP体育东总店",
        "city": "广州",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "广州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "广州",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-003-philosophy",
          "brand-expansion-20260830-culture-003-store",
          "brand-expansion-20260830-culture-003-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "广州"
      },
      {
        "id": "brand-expansion-20260830-culture-004",
        "name": "大隐书局（创智天地店）",
        "city": "上海",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-004-philosophy",
          "brand-expansion-20260830-culture-004-store",
          "brand-expansion-20260830-culture-004-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-culture-005",
        "name": "建投书局·浦江店",
        "city": "上海",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-005-philosophy",
          "brand-expansion-20260830-culture-005-store",
          "brand-expansion-20260830-culture-005-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-culture-006",
        "name": "万圣书园·优盛阅读空间",
        "city": "北京",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-006-philosophy",
          "brand-expansion-20260830-culture-006-store",
          "brand-expansion-20260830-culture-006-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-culture-007",
        "name": "模范书局·诗空间（中华圣公会教堂店）",
        "city": "北京",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-007-philosophy",
          "brand-expansion-20260830-culture-007-store",
          "brand-expansion-20260830-culture-007-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-culture-009",
        "name": "kubrick（油麻地店）",
        "city": "香港",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "香港当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "香港",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-culture-009-philosophy",
          "brand-expansion-20260830-culture-009-store",
          "brand-expansion-20260830-culture-009-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "香港"
      },
      {
        "id": "brand-expansion-20260830-dining-bars-002",
        "name": "Obscura by 唐香",
        "city": "上海",
        "category": "餐饮与夜间体验",
        "subCategory": "餐饮与夜间体验",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "餐饮与夜间体验",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-dining-bars-002-philosophy",
          "brand-expansion-20260830-dining-bars-002-store",
          "brand-expansion-20260830-dining-bars-002-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-dining-bars-004",
        "name": "Lamdre",
        "city": "北京",
        "category": "餐饮与夜间体验",
        "subCategory": "餐饮与夜间体验",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "餐饮与夜间体验",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-dining-bars-004-philosophy",
          "brand-expansion-20260830-dining-bars-004-store",
          "brand-expansion-20260830-dining-bars-004-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-dining-bars-005",
        "name": "YAYA's Pasta Bar",
        "city": "上海",
        "category": "餐饮与夜间体验",
        "subCategory": "餐饮与夜间体验",
        "brandRole": "上海当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "上海",
          "餐饮与夜间体验",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-dining-bars-005-philosophy",
          "brand-expansion-20260830-dining-bars-005-store",
          "brand-expansion-20260830-dining-bars-005-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260830-dining-bars-011",
        "name": "Hope & Sesame Guangzhou · 庙前冰室",
        "city": "广州",
        "category": "餐饮与夜间体验",
        "subCategory": "餐饮与夜间体验",
        "brandRole": "广州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "广州",
          "餐饮与夜间体验",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-dining-bars-011-philosophy",
          "brand-expansion-20260830-dining-bars-011-store",
          "brand-expansion-20260830-dining-bars-011-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "广州"
      },
      {
        "id": "brand-expansion-20260830-dining-bars-012",
        "name": "悠航SLOWBOAT·三里屯酿酒坊",
        "city": "北京",
        "category": "餐饮与夜间体验",
        "subCategory": "餐饮与夜间体验",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "餐饮与夜间体验",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-dining-bars-012-philosophy",
          "brand-expansion-20260830-dining-bars-012-store",
          "brand-expansion-20260830-dining-bars-012-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260830-dining-bars-013",
        "name": "京A精酿餐吧·798店",
        "city": "北京",
        "category": "餐饮与夜间体验",
        "subCategory": "餐饮与夜间体验",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "餐饮与夜间体验",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-expansion-20260830-dining-bars-013-philosophy",
          "brand-expansion-20260830-dining-bars-013-store",
          "brand-expansion-20260830-dining-bars-013-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      },
      {
        "id": "brand-exp80-i-107",
        "name": "樂班Le’ban农场餐厅（米禾农场店）",
        "city": "西安",
        "category": "农场餐饮",
        "subCategory": "农场餐饮",
        "brandRole": "西安当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "西安",
          "农场餐饮",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-107-philosophy",
          "brand-exp80-i-107-store",
          "brand-exp80-i-107-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "西安"
      },
      {
        "id": "brand-exp80-i-108",
        "name": "裕莲茶楼（西安万象城店）",
        "city": "西安",
        "category": "当代茶馆",
        "subCategory": "当代茶馆",
        "brandRole": "西安当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "西安",
          "当代茶馆",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-108-philosophy",
          "brand-exp80-i-108-store",
          "brand-exp80-i-108-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "西安"
      },
      {
        "id": "brand-exp80-i-111",
        "name": "米林爸爸可颂（下浩里店）",
        "city": "重庆",
        "category": "烘焙咖啡复合店",
        "subCategory": "烘焙咖啡复合店",
        "brandRole": "重庆当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "重庆",
          "烘焙咖啡复合店",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-111-philosophy",
          "brand-exp80-i-111-store",
          "brand-exp80-i-111-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "重庆"
      },
      {
        "id": "brand-exp80-i-113",
        "name": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
        "city": "厦门",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "厦门当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "厦门",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-113-philosophy",
          "brand-exp80-i-113-store",
          "brand-exp80-i-113-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "厦门"
      },
      {
        "id": "brand-exp80-i-115",
        "name": "深圳书城湾区城（湾区之眼）",
        "city": "深圳",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "深圳当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "深圳",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-115-philosophy",
          "brand-exp80-i-115-store",
          "brand-exp80-i-115-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "深圳"
      },
      {
        "id": "brand-exp80-i-116",
        "name": "Oneup（深圳万象天地店）",
        "city": "深圳",
        "category": "运动生活方式零售",
        "subCategory": "运动生活方式零售",
        "brandRole": "深圳当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "深圳",
          "运动生活方式零售",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-116-philosophy",
          "brand-exp80-i-116-store",
          "brand-exp80-i-116-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "深圳"
      },
      {
        "id": "brand-exp80-i-117",
        "name": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
        "city": "深圳",
        "category": "艺术生活方式空间",
        "subCategory": "艺术生活方式空间",
        "brandRole": "深圳当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "深圳",
          "艺术生活方式空间",
          "完整入库"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-117-philosophy",
          "brand-exp80-i-117-store",
          "brand-exp80-i-117-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "深圳"
      },
      {
        "id": "brand-exp80-i-118",
        "name": "覔书店（深圳壹方城店）",
        "city": "深圳",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "深圳当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "深圳",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-118-philosophy",
          "brand-exp80-i-118-store",
          "brand-exp80-i-118-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "深圳"
      },
      {
        "id": "brand-exp80-i-119",
        "name": "Kurasu（深圳湾万象城店）",
        "city": "深圳",
        "category": "精品咖啡",
        "subCategory": "精品咖啡",
        "brandRole": "深圳当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "深圳",
          "精品咖啡",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-119-philosophy",
          "brand-exp80-i-119-store",
          "brand-exp80-i-119-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "深圳"
      },
      {
        "id": "brand-exp80-i-120",
        "name": "幸子食堂（胜利街店）",
        "city": "武汉",
        "category": "社区食堂",
        "subCategory": "社区食堂",
        "brandRole": "武汉当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "武汉",
          "社区食堂",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-120-philosophy",
          "brand-exp80-i-120-store",
          "brand-exp80-i-120-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "武汉"
      },
      {
        "id": "brand-exp80-i-121",
        "name": "精武有食集（武汉越秀国金天地）",
        "city": "武汉",
        "category": "城市食集",
        "subCategory": "城市食集",
        "brandRole": "武汉当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "武汉",
          "城市食集",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-121-philosophy",
          "brand-exp80-i-121-store",
          "brand-exp80-i-121-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "武汉"
      },
      {
        "id": "brand-exp80-i-122",
        "name": "HOJI Bistro（西安量子晨店）",
        "city": "西安",
        "category": "当代小酒馆",
        "subCategory": "当代小酒馆",
        "brandRole": "西安当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "西安",
          "当代小酒馆",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-122-philosophy",
          "brand-exp80-i-122-store",
          "brand-exp80-i-122-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "西安"
      },
      {
        "id": "brand-exp80-i-123",
        "name": "乌鹊JIU食肆（苏州首店）",
        "city": "苏州",
        "category": "当代餐饮",
        "subCategory": "当代餐饮",
        "brandRole": "苏州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "苏州",
          "当代餐饮",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-123-philosophy",
          "brand-exp80-i-123-store",
          "brand-exp80-i-123-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "苏州"
      },
      {
        "id": "brand-exp80-i-124",
        "name": "河谷咖啡（仙居神仙居店）",
        "city": "台州",
        "category": "精品咖啡",
        "subCategory": "精品咖啡",
        "brandRole": "台州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "台州",
          "精品咖啡",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-124-philosophy",
          "brand-exp80-i-124-store",
          "brand-exp80-i-124-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "台州"
      },
      {
        "id": "brand-exp80-i-125",
        "name": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
        "city": "宁波",
        "category": "手作烘焙",
        "subCategory": "手作烘焙",
        "brandRole": "宁波当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "宁波",
          "手作烘焙",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-125-philosophy",
          "brand-exp80-i-125-store",
          "brand-exp80-i-125-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "宁波"
      },
      {
        "id": "brand-exp80-i-126",
        "name": "shanya山下洋食（杭州印店）",
        "city": "杭州",
        "category": "西式餐饮",
        "subCategory": "西式餐饮",
        "brandRole": "杭州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "杭州",
          "西式餐饮",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-126-philosophy",
          "brand-exp80-i-126-store",
          "brand-exp80-i-126-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "杭州"
      },
      {
        "id": "brand-exp80-i-128",
        "name": "SANG TEA桑茶（杭州中山北路店）",
        "city": "杭州",
        "category": "当代茶馆",
        "subCategory": "当代茶馆",
        "brandRole": "杭州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "杭州",
          "当代茶馆",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-128-philosophy",
          "brand-exp80-i-128-store",
          "brand-exp80-i-128-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "杭州"
      },
      {
        "id": "brand-exp80-i-130",
        "name": "富贵山下·日茶夜酒（金陵长乐坊店）",
        "city": "南京",
        "category": "日茶夜酒餐饮",
        "subCategory": "日茶夜酒餐饮",
        "brandRole": "南京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "南京",
          "日茶夜酒餐饮",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-130-philosophy",
          "brand-exp80-i-130-store",
          "brand-exp80-i-130-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "南京"
      },
      {
        "id": "brand-exp80-i-131",
        "name": "32HOW（厦门华新路店）",
        "city": "厦门",
        "category": "精品咖啡",
        "subCategory": "精品咖啡",
        "brandRole": "厦门当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "厦门",
          "精品咖啡",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-131-philosophy",
          "brand-exp80-i-131-store",
          "brand-exp80-i-131-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "厦门"
      },
      {
        "id": "brand-exp80-i-132",
        "name": "可一书店·仙林艺术中心",
        "city": "南京",
        "category": "文化书店",
        "subCategory": "文化书店",
        "brandRole": "南京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "南京",
          "文化书店",
          "完整入库"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-132-philosophy",
          "brand-exp80-i-132-store",
          "brand-exp80-i-132-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "南京"
      },
      {
        "id": "brand-exp80-i-133",
        "name": "之仓咖啡（西安米禾农场店）",
        "city": "西安",
        "category": "精品咖啡",
        "subCategory": "精品咖啡",
        "brandRole": "西安当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "西安",
          "精品咖啡",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-133-philosophy",
          "brand-exp80-i-133-store",
          "brand-exp80-i-133-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "西安"
      },
      {
        "id": "brand-exp80-i-134",
        "name": "WHATEVER咖啡（苏州湖滨新天地店）",
        "city": "苏州",
        "category": "精品咖啡",
        "subCategory": "精品咖啡",
        "brandRole": "苏州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "苏州",
          "精品咖啡",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-134-philosophy",
          "brand-exp80-i-134-store",
          "brand-exp80-i-134-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "苏州"
      },
      {
        "id": "brand-exp80-i-136",
        "name": "POKAPOKA面包商店（苏州十全街店）",
        "city": "苏州",
        "category": "手作烘焙",
        "subCategory": "手作烘焙",
        "brandRole": "苏州当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "苏州",
          "手作烘焙",
          "完整入库"
        ],
        "fitDNA": [
          "DCBR",
          "LCMR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-136-philosophy",
          "brand-exp80-i-136-store",
          "brand-exp80-i-136-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "苏州"
      },
      {
        "id": "brand-exp80-i-137",
        "name": "MACONDO马孔多全国首店（北京朝阳大悦城）",
        "city": "北京",
        "category": "跑步生活方式零售",
        "subCategory": "跑步生活方式零售",
        "brandRole": "北京当前实体空间品牌样本",
        "maturity": "完整资料已核验",
        "tags": [
          "北京",
          "跑步生活方式零售",
          "完整入库"
        ],
        "fitDNA": [
          "DSMR",
          "DSBR"
        ],
        "spaceDemand": "适合具有独立识别、可停留体验并能承载内容活动的非标空间。",
        "fitNote": "品牌理念、当前实体空间、运营深读与本地评审图库已形成闭环。",
        "risk": "具体合作前仍需复核租赁、工程、消防及当期经营条件。",
        "sourceKeys": [
          "brand-exp80-i-137-philosophy",
          "brand-exp80-i-137-store",
          "brand-exp80-i-137-deep-read"
        ],
        "verification": "身份、理念、当前空间、专业深读与4至5张图片均完成核验",
        "localCity": "北京"
      }
    ],
    "editorial": {
      "checkedAt": "2026-08-31",
      "brands": {
        "brand-exp80-c-021": {
          "expectedName": "爱德面包坊",
          "canonicalName": "爱德面包坊",
          "entityRoot": "南京爱德食品有限公司；项目发起与公益体系为爱德基金会",
          "aliases": [
            "汇爱坊·爱德面包坊",
            "爱德面包坊（游府西街店）",
            "爱德面包坊（新街口地铁店）"
          ],
          "entityType": "公益社会企业品牌",
          "categoryLabel": "社区与可持续",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以门店和烘焙训练让心智障碍学员获得真实职业能力…",
          "philosophy": "以门店和烘焙训练让心智障碍学员获得真实职业能力、收入与社会交往机会，并用消费支持替代单向捐助，推动残健共融。",
          "philosophyAttribution": "DNA编辑改写｜依据爱德基金会",
          "philosophySourceKeys": [
            "brand-exp80-c-021-philosophy"
          ],
          "learnMore": [
            {
              "title": "就业典型 | 43岁‘喜憨儿’成了面包店的‘福总’",
              "displayTitle": "爱德面包坊的经营与空间方法",
              "sourceKey": "brand-exp80-c-021-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "南京"
            ],
            "citiesStatus": "complete",
            "descriptor": "南京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "南京当前指定空间",
            "citySourceKey": "brand-exp80-c-021-store",
            "addressSourceKey": "brand-exp80-c-021-store",
            "address": "南京新街口地铁站20号出口 E33 铺位"
          }
        },
        "brand-exp80-c-026": {
          "expectedName": "龙凤旗袍（陕西北路旗舰店）",
          "canonicalName": "龙凤旗袍（陕西北路旗舰店）",
          "entityRoot": "上海龙凤中式服装有限公司",
          "aliases": [
            "龙凤中式服装",
            "龙凤旗袍",
            "龙凤旗袍陕西北路店",
            "龙凤旗袍旗舰店"
          ],
          "entityType": "中华老字号品牌门店",
          "categoryLabel": "社区与可持续",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "坚持一人一版、全手工量体定制和九大传统工艺，让…",
          "philosophy": "坚持一人一版、全手工量体定制和九大传统工艺，让同一位裁缝从选料、测量到制作贯穿全过程，同时把旗袍调整为更适合现代日常穿着的形态。",
          "philosophyAttribution": "DNA编辑改写｜依据上海市人民政府英文门户，来源上海市商务委员会",
          "philosophySourceKeys": [
            "brand-exp80-c-026-philosophy"
          ],
          "learnMore": [
            {
              "title": "把龙‘穿’在身上！‘新年战袍’怎么能少得了它？",
              "displayTitle": "龙凤旗袍（陕西北路旗舰店）的经营与空间方法",
              "sourceKey": "brand-exp80-c-026-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-c-026-store",
            "addressSourceKey": "brand-exp80-c-026-store",
            "address": "上海市静安区陕西北路207-209号"
          }
        },
        "brand-exp80-c-028": {
          "expectedName": "klee klee",
          "canonicalName": "klee klee",
          "entityRoot": "上海素然服饰有限公司体系",
          "aliases": [
            "klee klee & friends"
          ],
          "entityType": "可持续服装子品牌",
          "categoryLabel": "社区与可持续",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以慢下来、人与自然共生、低影响小批量生产和经久…",
          "philosophy": "以慢下来、人与自然共生、低影响小批量生产和经久耐用为核心，并把可拆卸、可回收、可长期使用的长效设计延伸到零售空间与家具。",
          "philosophyAttribution": "DNA编辑改写｜依据艾伦·麦克阿瑟基金会",
          "philosophySourceKeys": [
            "brand-exp80-c-028-philosophy"
          ],
          "learnMore": [
            {
              "title": "klee klee & friends，上海 / CASE PAVILION 案亭",
              "displayTitle": "klee klee的经营与空间方法",
              "sourceKey": "brand-exp80-c-028-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-c-028-store",
            "addressSourceKey": "brand-exp80-c-028-store",
            "address": "上海市徐汇区安福路322号园区内"
          }
        },
        "brand-exp80-d-032": {
          "expectedName": "Fabrica X（The Mills Shop 108）",
          "canonicalName": "Fabrica X（The Mills Shop 108）",
          "entityRoot": "Fabrica X（The Mills Shop 108）",
          "aliases": [
            "Fabrica X",
            "Fabrica X at The Mills",
            "The Mills Shop 108"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "户外与循环生活",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "让纺织科技、循环材料与负责任消费在公众可触达的…",
          "philosophy": "让纺织科技、循环材料与负责任消费在公众可触达的零售和展览场景中相遇，加速可持续创新的商业落地。",
          "philosophyAttribution": "DNA编辑改写｜依据Fabrica X",
          "philosophySourceKeys": [
            "brand-exp80-d-032-philosophy"
          ],
          "learnMore": [
            {
              "title": "The Mills Fabrica Impact Report 2024/25",
              "displayTitle": "Fabrica X（The Mills Shop 108）的经营与空间方法",
              "sourceKey": "brand-exp80-d-032-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "香港"
            ],
            "citiesStatus": "complete",
            "descriptor": "香港指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "香港当前指定空间",
            "citySourceKey": "brand-exp80-d-032-store",
            "addressSourceKey": "brand-exp80-d-032-store",
            "address": "Shop 108, 1/F, The Mills, 45 Pak Tin Par Street, Tsuen Wan, Hong Kong"
          }
        },
        "brand-exp80-d-035": {
          "expectedName": "Rapha Shanghai Clubhouse",
          "canonicalName": "Rapha Shanghai Clubhouse",
          "entityRoot": "Rapha Shanghai Clubhouse",
          "aliases": [
            "Rapha Shanghai",
            "Rapha Clubhouse Shanghai",
            "Rapha 上海会所"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "户外与循环生活",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "Inspire the world to li…",
          "philosophy": "Inspire the world to live life by bike；用会所、骑行和咖啡把品牌关系转化为长期骑行社群。",
          "philosophyAttribution": "DNA编辑改写｜依据Rapha",
          "philosophySourceKeys": [
            "brand-exp80-d-035-philosophy"
          ],
          "learnMore": [
            {
              "title": "Rapha BR Clubhouse Shanghai",
              "displayTitle": "Rapha Shanghai Clubhouse的经营与空间方法",
              "sourceKey": "brand-exp80-d-035-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-d-035-store",
            "addressSourceKey": "brand-exp80-d-035-store",
            "address": "上海市徐汇区东湖路20号 / 20 Donghu Road, Xuhui, Shanghai"
          }
        },
        "brand-exp80-d-037": {
          "expectedName": "ARC'TERYX Alpha Center Shanghai",
          "canonicalName": "ARC'TERYX Alpha Center Shanghai",
          "entityRoot": "ARC'TERYX Alpha Center Shanghai",
          "aliases": [
            "ARC'TERYX Alpha Center",
            "始祖鸟 Alpha Center 上海",
            "始祖鸟力宝广场店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "户外与循环生活",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "Obsessively designed ge…",
          "philosophy": "Obsessively designed gear for mountain athletes；每件产品解决真实问题，以功能、简…",
          "philosophyAttribution": "DNA编辑改写｜依据Arc'teryx",
          "philosophySourceKeys": [
            "brand-exp80-d-037-philosophy"
          ],
          "learnMore": [
            {
              "title": "ARC'TERYX Alpha Center Shanghai",
              "displayTitle": "ARC'TERYX Alpha Center Shanghai的经营与空间方法",
              "sourceKey": "brand-exp80-d-037-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-d-037-store",
            "addressSourceKey": "brand-exp80-d-037-store",
            "address": "上海市黄浦区淮海中路222号力宝广场 L1 104及 L2 206-207"
          }
        },
        "brand-exp80-d-041": {
          "expectedName": "Nike 跑百巷 Run Hai Lane",
          "canonicalName": "Nike 跑百巷 Run Hai Lane",
          "entityRoot": "Nike 跑百巷 Run Hai Lane",
          "aliases": [
            "Nike Run Hai Lane",
            "耐克跑百巷",
            "跑百巷"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "户外与循环生活",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "为跑者而生，与城市、社区和跑者共建上海跑步文化…",
          "philosophy": "为跑者而生，与城市、社区和跑者共建上海跑步文化，让跑步融入日常生活。",
          "philosophyAttribution": "DNA编辑改写｜依据Nike 中国",
          "philosophySourceKeys": [
            "brand-exp80-d-041-philosophy"
          ],
          "learnMore": [
            {
              "title": "RUN HAI LANE mural by Omacke",
              "displayTitle": "Nike 跑百巷 Run Hai Lane的经营与空间方法",
              "sourceKey": "brand-exp80-d-041-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-d-041-store",
            "addressSourceKey": "brand-exp80-d-041-store",
            "address": "上海市静安区西康路99-1号"
          }
        },
        "brand-exp80-d-047": {
          "expectedName": "岩时攀岩 Gate M 西岸梦中心店",
          "canonicalName": "岩时攀岩 Gate M 西岸梦中心店",
          "entityRoot": "岩时攀岩 Gate M 西岸梦中心店",
          "aliases": [
            "岩时攀岩",
            "Rock Hour",
            "Rock Hour Climbing"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "户外与循环生活",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "让喜欢攀岩的人值得拥有更好的攀岩馆；岩馆不只卖…",
          "philosophy": "让喜欢攀岩的人值得拥有更好的攀岩馆；岩馆不只卖门票，而要以好路线和空间建立人与人的连接。",
          "philosophyAttribution": "DNA编辑改写｜依据赢商网",
          "philosophySourceKeys": [
            "brand-exp80-d-047-philosophy"
          ],
          "learnMore": [
            {
              "title": "Vol.96 一家岩馆，见证中国攀岩的一个时代",
              "displayTitle": "岩时攀岩 Gate M 西岸梦中心店的经营与空间方法",
              "sourceKey": "brand-exp80-d-047-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-d-047-store",
            "addressSourceKey": "brand-exp80-d-047-store",
            "address": "上海市徐汇区龙腾大道2266号 Gate M 西岸梦中心12号楼201单元"
          }
        },
        "brand-exp80-d-050": {
          "expectedName": "PANE PLAZA Shanghai",
          "canonicalName": "PANE PLAZA Shanghai",
          "entityRoot": "PANE PLAZA Shanghai",
          "aliases": [
            "PANE",
            "PANE PLAZA",
            "PANE 上海永源路店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "户外与循环生活",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "Timeless, Motion, Authe…",
          "philosophy": "Timeless, Motion, Authentic；以自由而实用的产品和空间，让运动、创作与城市社区持续发生关系。",
          "philosophyAttribution": "DNA编辑改写｜依据PANE",
          "philosophySourceKeys": [
            "brand-exp80-d-050-philosophy"
          ],
          "learnMore": [
            {
              "title": "PANE PLAZA 于上海永源路开幕",
              "displayTitle": "PANE PLAZA Shanghai的经营与空间方法",
              "sourceKey": "brand-exp80-d-050-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-d-050-store",
            "addressSourceKey": "brand-exp80-d-050-store",
            "address": "上海市静安区永源路22号"
          }
        },
        "brand-exp80-g-071": {
          "expectedName": "Cabana 北京三里屯旗舰店",
          "canonicalName": "Cabana 北京三里屯旗舰店",
          "entityRoot": "Cabana contemporary design furniture retail platform",
          "aliases": [
            "Cabana",
            "CABANA",
            "homecabana"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "设计与生活方式",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以策展式选品让当代设计进入日常生活，并通过展览…",
          "philosophy": "以策展式选品让当代设计进入日常生活，并通过展览、论坛和工作坊连接国际设计、国内设计与新兴创作者。",
          "philosophyAttribution": "DNA编辑改写｜依据Cabana / LinkedIn",
          "philosophySourceKeys": [
            "brand-exp80-g-071-philosophy"
          ],
          "learnMore": [
            {
              "title": "Cabana Beijing",
              "displayTitle": "Cabana 北京三里屯旗舰店的经营与空间方法",
              "sourceKey": "brand-exp80-g-071-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-exp80-g-071-store",
            "addressSourceKey": "brand-exp80-g-071-store",
            "address": "北京市朝阳区三里屯太古里北区N7楼3层至4层"
          }
        },
        "brand-exp80-g-072": {
          "expectedName": "ICICLE SPACE 上海合川路旗舰空间",
          "canonicalName": "ICICLE SPACE 上海合川路旗舰空间",
          "entityRoot": "ICICLE SPACE Shanghai Hechuan Road",
          "aliases": [
            "ICICLE SPACE",
            "之禾空间",
            "ICICLE SPACE 上海"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "设计与生活方式",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以Made in Earth为核心，把时装、艺…",
          "philosophy": "以Made in Earth为核心，把时装、艺术、文化与生活方式放入同一可持续空间。",
          "philosophyAttribution": "DNA编辑改写｜依据ICICLE",
          "philosophySourceKeys": [
            "brand-exp80-g-072-philosophy"
          ],
          "learnMore": [
            {
              "title": "Shop facade in Shanghai",
              "displayTitle": "ICICLE SPACE 上海合川路旗舰空间的经营与空间方法",
              "sourceKey": "brand-exp80-g-072-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-g-072-store",
            "addressSourceKey": "brand-exp80-g-072-store",
            "address": "上海市闵行区合川路2570号上海科技绿洲三期2号楼1至2层"
          }
        },
        "brand-exp80-g-073": {
          "expectedName": "Dover Street Market Beijing 王府井店",
          "canonicalName": "Dover Street Market Beijing 王府井店",
          "entityRoot": "Dover Street Market Beijing",
          "aliases": [
            "DSM Beijing",
            "Dover Street Market Beijing",
            "北京杜佛市场"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "设计与生活方式",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以Beautiful Chaos让创作、装置和…",
          "philosophy": "以Beautiful Chaos让创作、装置和品牌之间保持碰撞，把创造置于单纯交易之前。",
          "philosophyAttribution": "DNA编辑改写｜依据Vogue",
          "philosophySourceKeys": [
            "brand-exp80-g-073-philosophy"
          ],
          "learnMore": [
            {
              "title": "Go With the Chaos: The Architects of Dover Street Market on Its Recipe for Radi…",
              "displayTitle": "Dover Street Market Beijing 王府井店的经营与空间方法",
              "sourceKey": "brand-exp80-g-073-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-exp80-g-073-store",
            "addressSourceKey": "brand-exp80-g-073-store",
            "address": "北京市东城区王府井大街269号1号楼"
          }
        },
        "brand-exp80-g-074": {
          "expectedName": "SHANG XIA Maison 上海之家",
          "canonicalName": "SHANG XIA Maison 上海之家",
          "entityRoot": "SHANG XIA Maison Shanghai",
          "aliases": [
            "SHANG XIA",
            "上下",
            "SHANG XIA Maison",
            "上海之家"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "设计与生活方式",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把亚洲工艺传统与现代设计、材料和当代形式结合，…",
          "philosophy": "把亚洲工艺传统与现代设计、材料和当代形式结合，让古老技艺进入今天的生活。",
          "philosophyAttribution": "DNA编辑改写｜依据SHANG XIA",
          "philosophySourceKeys": [
            "brand-exp80-g-074-philosophy"
          ],
          "learnMore": [
            {
              "title": "Shang Xia's striking Shanghai flagship",
              "displayTitle": "SHANG XIA Maison 上海之家的经营与空间方法",
              "sourceKey": "brand-exp80-g-074-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-g-074-store",
            "addressSourceKey": "brand-exp80-g-074-store",
            "address": "上海市黄浦区淮海中路233号"
          }
        },
        "brand-exp80-g-078": {
          "expectedName": "多少MoreLess 上海M50旗舰店",
          "canonicalName": "多少MoreLess 上海M50旗舰店",
          "entityRoot": "多少MoreLess furniture",
          "aliases": [
            "多少",
            "MoreLess",
            "多少家具",
            "MoreLess Furniture"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "设计与生活方式",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "节约就是低碳，以对材料、结构和生活必要性的克制…",
          "philosophy": "节约就是低碳，以对材料、结构和生活必要性的克制形成当代中国家具。",
          "philosophyAttribution": "DNA编辑改写｜依据China Design Centre",
          "philosophySourceKeys": [
            "brand-exp80-g-078-philosophy"
          ],
          "learnMore": [
            {
              "title": "More Less Store by Sx",
              "displayTitle": "多少MoreLess 上海M50旗舰店的经营与空间方法",
              "sourceKey": "brand-exp80-g-078-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-g-078-store",
            "addressSourceKey": "brand-exp80-g-078-store",
            "address": "上海市普陀区莫干山路50号17号楼106室"
          }
        },
        "brand-exp80-g-079": {
          "expectedName": "Melt Season 上海太原路旗舰店",
          "canonicalName": "Melt Season 上海太原路旗舰店",
          "entityRoot": "Melt Season fragrance",
          "aliases": [
            "Melt Season",
            "MELT SEASON",
            "融化季节"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "设计与生活方式",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以当代东方审美承载女性的自由、柔软与韧性，让气…",
          "philosophy": "以当代东方审美承载女性的自由、柔软与韧性，让气味成为与空间和自我相遇的媒介。",
          "philosophyAttribution": "DNA编辑改写｜依据小宇宙",
          "philosophySourceKeys": [
            "brand-exp80-g-079-philosophy"
          ],
          "learnMore": [
            {
              "title": "Melt Season Flagship at Taiyuan Road",
              "displayTitle": "Melt Season 上海太原路旗舰店的经营与空间方法",
              "sourceKey": "brand-exp80-g-079-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-g-079-store",
            "addressSourceKey": "brand-exp80-g-079-store",
            "address": "上海市徐汇区太原路与永康路交叉口东南约40米"
          }
        },
        "brand-exp80-g-080": {
          "expectedName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "canonicalName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "entityRoot": "RECLASSIFIED fragrance",
          "aliases": [
            "RE调香室",
            "RECLASSIFIED",
            "RECLASSIFIED调香室"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "设计与生活方式",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以轻沙龙方式降低小众香氛的进入门槛，让气味与上…",
          "philosophy": "以轻沙龙方式降低小众香氛的进入门槛，让气味与上海城市生活发生日常联系。",
          "philosophyAttribution": "DNA编辑改写｜依据LPS Shanghai",
          "philosophySourceKeys": [
            "brand-exp80-g-080-philosophy"
          ],
          "learnMore": [
            {
              "title": "Reclassified",
              "displayTitle": "RECLASSIFIED调香室 上生·新所旗舰店的经营与空间方法",
              "sourceKey": "brand-exp80-g-080-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-exp80-g-080-store",
            "addressSourceKey": "brand-exp80-g-080-store",
            "address": "上海市长宁区延安西路1262号上生·新所1号楼102至104室"
          }
        },
        "brand-exp80-h-081": {
          "expectedName": "黄天源观前街店",
          "canonicalName": "黄天源观前街店",
          "entityRoot": "黄天源观前街店",
          "aliases": [
            "黄天源观前店",
            "黄天源糕团观前街店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以苏式糕团传统技艺为根，在保留时令与手工逻辑的…",
          "philosophy": "以苏式糕团传统技艺为根，在保留时令与手工逻辑的同时持续研发适合当代消费的新产品。",
          "philosophyAttribution": "DNA编辑改写｜依据中国经济网",
          "philosophySourceKeys": [
            "brand-exp80-h-081-philosophy"
          ],
          "learnMore": [
            {
              "title": "黄天源：苏式糕团的守正与创新",
              "displayTitle": "黄天源观前街店的经营与空间方法",
              "sourceKey": "brand-exp80-h-081-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "complete",
            "descriptor": "苏州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "苏州当前指定空间",
            "citySourceKey": "brand-exp80-h-081-store",
            "addressSourceKey": "brand-exp80-h-081-store",
            "address": "苏州市姑苏区观前街86—88号"
          }
        },
        "brand-exp80-h-082": {
          "expectedName": "松鹤楼苏帮菜观前店",
          "canonicalName": "松鹤楼苏帮菜观前店",
          "entityRoot": "松鹤楼苏帮菜观前店",
          "aliases": [
            "松鹤楼观前店",
            "松鹤楼太监弄店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以苏帮菜传统为底层，把经典技艺、时令风物与当代…",
          "philosophy": "以苏帮菜传统为底层，把经典技艺、时令风物与当代餐饮体验结合。",
          "philosophyAttribution": "DNA编辑改写｜依据豫园股份",
          "philosophySourceKeys": [
            "brand-exp80-h-082-philosophy"
          ],
          "learnMore": [
            {
              "title": "苏州老字号松鹤楼历史档案",
              "displayTitle": "松鹤楼苏帮菜观前店的经营与空间方法",
              "sourceKey": "brand-exp80-h-082-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "complete",
            "descriptor": "苏州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "苏州当前指定空间",
            "citySourceKey": "brand-exp80-h-082-store",
            "addressSourceKey": "brand-exp80-h-082-store",
            "address": "苏州市姑苏区太监弄72号"
          }
        },
        "brand-exp80-h-085": {
          "expectedName": "桂发祥十八街麻花文化馆",
          "canonicalName": "桂发祥十八街麻花文化馆",
          "entityRoot": "桂发祥十八街麻花文化馆",
          "aliases": [
            "桂发祥文化馆",
            "十八街麻花文化馆"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以守护国家级非遗技艺为根，通过可参观、可互动的…",
          "philosophy": "以守护国家级非遗技艺为根，通过可参观、可互动的文化空间让传统食品走进当代生活。",
          "philosophyAttribution": "DNA编辑改写｜依据天津桂发祥十八街麻花食品股份有限公司",
          "philosophySourceKeys": [
            "brand-exp80-h-085-philosophy"
          ],
          "learnMore": [
            {
              "title": "桂发祥：老字号创新与文化体验",
              "displayTitle": "桂发祥十八街麻花文化馆的经营与空间方法",
              "sourceKey": "brand-exp80-h-085-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "天津"
            ],
            "citiesStatus": "complete",
            "descriptor": "天津指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "天津当前指定空间",
            "citySourceKey": "brand-exp80-h-085-store",
            "addressSourceKey": "brand-exp80-h-085-store",
            "address": "天津市河西区洞庭路32号"
          }
        },
        "brand-exp80-h-086": {
          "expectedName": "耳朵眼会馆鼓楼店",
          "canonicalName": "耳朵眼会馆鼓楼店",
          "entityRoot": "耳朵眼会馆鼓楼店",
          "aliases": [
            "耳朵眼鼓楼店",
            "耳朵眼炸糕鼓楼店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "守住炸糕技艺与天津味道，同时以餐饮空间、产品体…",
          "philosophy": "守住炸糕技艺与天津味道，同时以餐饮空间、产品体系和服务创新扩大老字号的当代触点。",
          "philosophyAttribution": "DNA编辑改写｜依据中国烹饪协会/天津日报",
          "philosophySourceKeys": [
            "brand-exp80-h-086-philosophy"
          ],
          "learnMore": [
            {
              "title": "耳朵眼：老字号传承与创新访谈",
              "displayTitle": "耳朵眼会馆鼓楼店的经营与空间方法",
              "sourceKey": "brand-exp80-h-086-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "天津"
            ],
            "citiesStatus": "complete",
            "descriptor": "天津指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "天津当前指定空间",
            "citySourceKey": "brand-exp80-h-086-store",
            "addressSourceKey": "brand-exp80-h-086-store",
            "address": "天津市南开区鼓楼东街12号"
          }
        },
        "brand-exp80-h-089": {
          "expectedName": "陶陶居酒家第十甫路总店",
          "canonicalName": "陶陶居酒家第十甫路总店",
          "entityRoot": "陶陶居酒家第十甫路总店",
          "aliases": [
            "陶陶居第十甫总店",
            "陶陶居老店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“一盅两件”的广府茶楼文化为根，在保留老店生…",
          "philosophy": "以“一盅两件”的广府茶楼文化为根，在保留老店生活方式的同时更新产品、服务与空间体验。",
          "philosophyAttribution": "DNA编辑改写｜依据广州市商务局",
          "philosophySourceKeys": [
            "brand-exp80-h-089-philosophy"
          ],
          "learnMore": [
            {
              "title": "陶陶居：百年茶楼的守正创新",
              "displayTitle": "陶陶居酒家第十甫路总店的经营与空间方法",
              "sourceKey": "brand-exp80-h-089-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "广州"
            ],
            "citiesStatus": "complete",
            "descriptor": "广州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "广州当前指定空间",
            "citySourceKey": "brand-exp80-h-089-store",
            "addressSourceKey": "brand-exp80-h-089-store",
            "address": "广州市荔湾区第十甫路20号"
          }
        },
        "brand-exp80-h-090": {
          "expectedName": "莲香楼第十甫路店",
          "canonicalName": "莲香楼第十甫路店",
          "entityRoot": "莲香楼第十甫路店",
          "aliases": [
            "莲香楼老店",
            "广州莲香楼第十甫店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以莲蓉与广式饼食技艺延续西关味道，并让老字号回…",
          "philosophy": "以莲蓉与广式饼食技艺延续西关味道，并让老字号回到社区日常与节庆礼俗。",
          "philosophyAttribution": "DNA编辑改写｜依据广州市荔湾区人民政府",
          "philosophySourceKeys": [
            "brand-exp80-h-090-philosophy"
          ],
          "learnMore": [
            {
              "title": "百年莲香楼延续西关味道",
              "displayTitle": "莲香楼第十甫路店的经营与空间方法",
              "sourceKey": "brand-exp80-h-090-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "广州"
            ],
            "citiesStatus": "complete",
            "descriptor": "广州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "广州当前指定空间",
            "citySourceKey": "brand-exp80-h-090-store",
            "addressSourceKey": "brand-exp80-h-090-store",
            "address": "广州市荔湾区第十甫路67号"
          }
        },
        "brand-exp80-h-092": {
          "expectedName": "广州酒家文昌总店",
          "canonicalName": "广州酒家文昌总店",
          "entityRoot": "广州酒家文昌总店",
          "aliases": [
            "广州酒家文昌店",
            "广州酒家总店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“食在广州第一家”的粤菜传统为根，通过技艺传…",
          "philosophy": "以“食在广州第一家”的粤菜传统为根，通过技艺传承、服务与空间焕新延续岭南饮食文化。",
          "philosophyAttribution": "DNA编辑改写｜依据广州酒家集团",
          "philosophySourceKeys": [
            "brand-exp80-h-092-philosophy"
          ],
          "learnMore": [
            {
              "title": "广州酒家文昌总店焕新",
              "displayTitle": "广州酒家文昌总店的经营与空间方法",
              "sourceKey": "brand-exp80-h-092-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "广州"
            ],
            "citiesStatus": "complete",
            "descriptor": "广州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "广州当前指定空间",
            "citySourceKey": "brand-exp80-h-092-store",
            "addressSourceKey": "brand-exp80-h-092-store",
            "address": "广州市荔湾区文昌南路2号"
          }
        },
        "brand-exp80-h-097": {
          "expectedName": "永和鱼丸南后街店",
          "canonicalName": "永和鱼丸南后街店",
          "entityRoot": "永和鱼丸南后街店",
          "aliases": [
            "永和鱼丸老铺",
            "永和鱼丸三坊七巷店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "坚持手工鱼丸技艺与福州地方口味，同时用标准化与…",
          "philosophy": "坚持手工鱼丸技艺与福州地方口味，同时用标准化与门店体验让传统小吃进入现代日常。",
          "philosophyAttribution": "DNA编辑改写｜依据商务部",
          "philosophySourceKeys": [
            "brand-exp80-h-097-philosophy"
          ],
          "learnMore": [
            {
              "title": "福州永和鱼丸的老字号新生",
              "displayTitle": "永和鱼丸南后街店的经营与空间方法",
              "sourceKey": "brand-exp80-h-097-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "福州"
            ],
            "citiesStatus": "complete",
            "descriptor": "福州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "福州当前指定空间",
            "citySourceKey": "brand-exp80-h-097-store",
            "addressSourceKey": "brand-exp80-h-097-store",
            "address": "福州市鼓楼区南后街89号"
          }
        },
        "brand-exp80-h-101": {
          "expectedName": "德华楼六渡桥店",
          "canonicalName": "德华楼六渡桥店",
          "entityRoot": "德华楼六渡桥店",
          "aliases": [
            "德华楼六渡桥",
            "德华楼清芬一路店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "守住武汉传统面点与老味道，以产品创新、场景焕新…",
          "philosophy": "守住武汉传统面点与老味道，以产品创新、场景焕新和标准化经营让老字号继续服务日常。",
          "philosophyAttribution": "DNA编辑改写｜依据武汉市商务局",
          "philosophySourceKeys": [
            "brand-exp80-h-101-philosophy"
          ],
          "learnMore": [
            {
              "title": "德华楼创新经营观察",
              "displayTitle": "德华楼六渡桥店的经营与空间方法",
              "sourceKey": "brand-exp80-h-101-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "武汉"
            ],
            "citiesStatus": "complete",
            "descriptor": "武汉指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "武汉当前指定空间",
            "citySourceKey": "brand-exp80-h-101-store",
            "addressSourceKey": "brand-exp80-h-101-store",
            "address": "武汉市汉口清芬一路，库玛背后（六渡桥过街天桥南侧）"
          }
        },
        "brand-exp80-h-102": {
          "expectedName": "火宫殿坡子街总店",
          "canonicalName": "火宫殿坡子街总店",
          "entityRoot": "火宫殿坡子街总店",
          "aliases": [
            "长沙火宫殿",
            "火宫殿坡子街店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把湖湘小吃、火庙民俗与市井公共生活结合，让传统…",
          "philosophy": "把湖湘小吃、火庙民俗与市井公共生活结合，让传统饮食在可观看、可参与的空间中延续。",
          "philosophyAttribution": "DNA编辑改写｜依据湖南工商大学",
          "philosophySourceKeys": [
            "brand-exp80-h-102-philosophy"
          ],
          "learnMore": [
            {
              "title": "火宫殿传承与经营访谈",
              "displayTitle": "火宫殿坡子街总店的经营与空间方法",
              "sourceKey": "brand-exp80-h-102-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "长沙"
            ],
            "citiesStatus": "complete",
            "descriptor": "长沙指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "长沙当前指定空间",
            "citySourceKey": "brand-exp80-h-102-store",
            "addressSourceKey": "brand-exp80-h-102-store",
            "address": "长沙市天心区坡子街127号"
          }
        },
        "brand-exp80-h-105": {
          "expectedName": "钟水饺人民公园总店",
          "canonicalName": "钟水饺人民公园总店",
          "entityRoot": "钟水饺人民公园总店",
          "aliases": [
            "钟水饺总店",
            "钟水饺人民公园店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以传统制馅、包制与红油调味技艺维持成都小吃本味…",
          "philosophy": "以传统制馅、包制与红油调味技艺维持成都小吃本味，并通过规范传承让经典进入当代公共生活。",
          "philosophyAttribution": "DNA编辑改写｜依据商务部",
          "philosophySourceKeys": [
            "brand-exp80-h-105-philosophy"
          ],
          "learnMore": [
            {
              "title": "成都传统小吃传承人报道",
              "displayTitle": "钟水饺人民公园总店的经营与空间方法",
              "sourceKey": "brand-exp80-h-105-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "成都"
            ],
            "citiesStatus": "complete",
            "descriptor": "成都指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "成都当前指定空间",
            "citySourceKey": "brand-exp80-h-105-store",
            "addressSourceKey": "brand-exp80-h-105-store",
            "address": "成都市青羊区少城路12号人民公园内紫薇阁"
          }
        },
        "brand-exp80-h-106": {
          "expectedName": "陈麻婆豆腐骡马市店",
          "canonicalName": "陈麻婆豆腐骡马市店",
          "entityRoot": "陈麻婆豆腐骡马市店",
          "aliases": [
            "陈麻婆豆腐骡马市总店",
            "陈麻婆东华门街店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "地域老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "守住麻、辣、烫、香、酥、嫩、鲜、活的川菜技艺表…",
          "philosophy": "守住麻、辣、烫、香、酥、嫩、鲜、活的川菜技艺表达，同时以稳定标准与当代服务延续城市名菜。",
          "philosophyAttribution": "DNA编辑改写｜依据商务部",
          "philosophySourceKeys": [
            "brand-exp80-h-106-philosophy"
          ],
          "learnMore": [
            {
              "title": "一盘麻婆豆腐里的成都味道",
              "displayTitle": "陈麻婆豆腐骡马市店的经营与空间方法",
              "sourceKey": "brand-exp80-h-106-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "成都"
            ],
            "citiesStatus": "complete",
            "descriptor": "成都指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "成都当前指定空间",
            "citySourceKey": "brand-exp80-h-106-store",
            "addressSourceKey": "brand-exp80-h-106-store",
            "address": "成都市青羊区东华门街51号（成都体育中心对面）"
          }
        },
        "brand-expansion-20260830-011": {
          "expectedName": "胡庆余堂国药号（大井巷95号）",
          "canonicalName": "胡庆余堂国药号（大井巷95号）",
          "entityRoot": "胡庆余堂国药号与胡庆余堂中药博物馆共址复合空间",
          "aliases": [
            "胡庆余堂国药号",
            "胡庆余堂中药博物馆",
            "胡庆余堂国药号总店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "采办务真，修制务精；以戒欺和诚信约束药材采购、…",
          "philosophy": "采办务真，修制务精；以戒欺和诚信约束药材采购、炮制与经营。",
          "philosophyAttribution": "DNA编辑改写｜依据胡庆余堂官方网站",
          "philosophySourceKeys": [
            "brand-expansion-20260830-011-philosophy"
          ],
          "learnMore": [
            {
              "title": "诚心有天知",
              "displayTitle": "胡庆余堂国药号（大井巷95号）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-011-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "杭州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "杭州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-011-store",
            "addressSourceKey": "brand-expansion-20260830-011-store",
            "address": "浙江省杭州市上城区大井巷95号"
          }
        },
        "brand-expansion-20260830-012": {
          "expectedName": "方回春堂河坊街馆",
          "canonicalName": "方回春堂河坊街馆",
          "entityRoot": "方回春堂河坊街馆",
          "aliases": [
            "方回春堂国药馆河坊街馆",
            "河坊街馆"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "仁心济世；许可赚钱，不许卖假；以名医好药作为经…",
          "philosophy": "仁心济世；许可赚钱，不许卖假；以名医好药作为经营抓手。",
          "philosophyAttribution": "DNA编辑改写｜依据方回春堂",
          "philosophySourceKeys": [
            "brand-expansion-20260830-012-philosophy"
          ],
          "learnMore": [
            {
              "title": "方回春堂传统膏方文化专题",
              "displayTitle": "方回春堂河坊街馆的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-012-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "杭州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "杭州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-012-store",
            "addressSourceKey": "brand-expansion-20260830-012-store",
            "address": "浙江省杭州市上城区河坊街117号"
          }
        },
        "brand-expansion-20260830-013": {
          "expectedName": "王星记旗舰店（河坊街店）",
          "canonicalName": "王星记旗舰店（河坊街店）",
          "entityRoot": "杭州王星记扇业有限公司旗下王星记河坊街旗舰店",
          "aliases": [
            "王星记扇庄",
            "王星记河坊街店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "扇艺中国，礼善世界；精工出细活，料好夺天工。",
          "philosophy": "扇艺中国，礼善世界；精工出细活，料好夺天工。",
          "philosophyAttribution": "DNA编辑改写｜依据王星记官方网站",
          "philosophySourceKeys": [
            "brand-expansion-20260830-013-philosophy"
          ],
          "learnMore": [
            {
              "title": "一把扇子的非遗新生",
              "displayTitle": "王星记旗舰店（河坊街店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-013-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "杭州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "杭州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-013-store",
            "addressSourceKey": "brand-expansion-20260830-013-store",
            "address": "浙江省杭州市上城区河坊街203-205号"
          }
        },
        "brand-expansion-20260830-014": {
          "expectedName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "canonicalName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "entityRoot": "万事利丝绸文化品牌体验地/万事利时尚艺术中心",
          "aliases": [
            "万事利丝绸文化品牌体验地",
            "万事利时尚艺术中心",
            "万事利丝绸文化馆（通俗称呼）"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "让世界爱上中国丝绸；以东方韵、国际范推动丝绸文…",
          "philosophy": "让世界爱上中国丝绸；以东方韵、国际范推动丝绸文化和当代设计连接。",
          "philosophyAttribution": "DNA编辑改写｜依据万事利官方网站",
          "philosophySourceKeys": [
            "brand-expansion-20260830-014-philosophy"
          ],
          "learnMore": [
            {
              "title": "万事利时尚艺术中心",
              "displayTitle": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-014-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "杭州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "杭州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-014-store",
            "addressSourceKey": "brand-expansion-20260830-014-store",
            "address": "浙江省杭州市上城区新塘路1233号万事利科创中心"
          }
        },
        "brand-expansion-20260830-015": {
          "expectedName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "canonicalName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "entityRoot": "杭州都锦生织锦博物馆及馆内产品展示销售厅",
          "aliases": [
            "都锦生织锦博物馆",
            "都锦生丝绸博物馆",
            "都锦生织锦博物馆商店（馆内展销功能）"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以实业救国的创办动机，将西湖风景和中国图像转译…",
          "philosophy": "以实业救国的创办动机，将西湖风景和中国图像转译为织锦，让传统织造进入现代生活。",
          "philosophyAttribution": "DNA编辑改写｜依据今日拱墅",
          "philosophySourceKeys": [
            "brand-expansion-20260830-015-philosophy"
          ],
          "learnMore": [
            {
              "title": "都锦生织锦博物馆项目",
              "displayTitle": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-015-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "杭州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "杭州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-015-store",
            "addressSourceKey": "brand-expansion-20260830-015-store",
            "address": "浙江省杭州市拱墅区凤起路519号"
          }
        },
        "brand-expansion-20260830-018": {
          "expectedName": "内联升大栅栏总店",
          "canonicalName": "内联升大栅栏总店",
          "entityRoot": "北京内联升鞋业有限公司大栅栏总店",
          "aliases": [
            "内联升总店",
            "内联升千层底布鞋店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "精工细作、货真价实，以质量和服务维持老字号信用。",
          "philosophy": "精工细作、货真价实，以质量和服务维持老字号信用。",
          "philosophyAttribution": "DNA编辑改写｜依据北京市文化和旅游局·Visit Beijing",
          "philosophySourceKeys": [
            "brand-expansion-20260830-018-philosophy"
          ],
          "learnMore": [
            {
              "title": "百年内联升的守正与创新",
              "displayTitle": "内联升大栅栏总店的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-018-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-018-store",
            "addressSourceKey": "brand-expansion-20260830-018-store",
            "address": "北京市西城区大栅栏街34号"
          }
        },
        "brand-expansion-20260830-019": {
          "expectedName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "canonicalName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "entityRoot": "北京同仁堂健康药业股份有限公司知嘛健康零号店",
          "aliases": [
            "知嘛健康零号店",
            "同仁堂知嘛健康零号店",
            "同仁堂健康零号店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以健康管理为核心，围绕全生命周期健康服务，把产…",
          "philosophy": "以健康管理为核心，围绕全生命周期健康服务，把产品、检测、体验和数字化零售整合到同一空间。",
          "philosophyAttribution": "DNA编辑改写｜依据北京同仁堂健康药业官方网站",
          "philosophySourceKeys": [
            "brand-expansion-20260830-019-philosophy"
          ],
          "learnMore": [
            {
              "title": "知嘛健康零号店设计访谈",
              "displayTitle": "同仁堂知嘛健康零号店（大兴思邈路39号）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-019-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-019-store",
            "addressSourceKey": "brand-expansion-20260830-019-store",
            "address": "北京市大兴区思邈路39号"
          }
        },
        "brand-expansion-20260830-020": {
          "expectedName": "谢馥春馥园（东关街243号）",
          "canonicalName": "谢馥春馥园（东关街243号）",
          "entityRoot": "谢馥春馥园品牌文化体验空间",
          "aliases": [
            "谢馥春馥园",
            "馥园",
            "谢馥春故居/谢氏老宅文化空间"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "传统工艺与老字号",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "天人合一，以东方化、天然化、人本化延续古典香粉…",
          "philosophy": "天人合一，以东方化、天然化、人本化延续古典香粉与东方生活美学。",
          "philosophyAttribution": "DNA编辑改写｜依据谢馥春官方网站",
          "philosophySourceKeys": [
            "brand-expansion-20260830-020-philosophy"
          ],
          "learnMore": [
            {
              "title": "老字号谢馥春的非遗焕新",
              "displayTitle": "谢馥春馥园（东关街243号）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-020-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "扬州"
            ],
            "citiesStatus": "complete",
            "descriptor": "扬州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "扬州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-020-store",
            "addressSourceKey": "brand-expansion-20260830-020-store",
            "address": "江苏省扬州市广陵区东关街243号"
          }
        },
        "brand-expansion-20260830-051": {
          "expectedName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "canonicalName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "entityRoot": "Modern Sky Lab 上海瑞虹天地月亮湾固定演出空间",
          "aliases": [
            "Modern Sky Lab Shanghai",
            "摩登天空实验室上海",
            "摩登天空上海"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "音乐现场",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“music+”连接音乐、青年文化与城市生活…",
          "philosophy": "以“music+”连接音乐、青年文化与城市生活方式，把现场演出延展为复合文化消费场景。",
          "philosophyAttribution": "DNA编辑改写｜依据摩登天空",
          "philosophySourceKeys": [
            "brand-expansion-20260830-051-philosophy"
          ],
          "learnMore": [
            {
              "title": "It's live: your guide to Shanghai's best gig venues",
              "displayTitle": "Modern Sky Lab 上海（瑞虹天地月亮湾店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-051-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-051-store",
            "addressSourceKey": "brand-expansion-20260830-051-store",
            "address": "上海市虹口区瑞虹路188号瑞虹天地月亮湾3层309-310号"
          }
        },
        "brand-expansion-20260830-052": {
          "expectedName": "DDC 黄昏黎明俱乐部（神路街店）",
          "canonicalName": "DDC 黄昏黎明俱乐部（神路街店）",
          "entityRoot": "DDC Dusk Dawn Club 北京神路街固定空间",
          "aliases": [
            "DDC",
            "Dusk Dawn Club",
            "黄昏黎明俱乐部",
            "DDC酒吧"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "音乐现场",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以开放、多元、跨学科的现场为核心，让原创音乐、…",
          "philosophy": "以开放、多元、跨学科的现场为核心，让原创音乐、视觉艺术与社区交流在同一空间发生。",
          "philosophyAttribution": "DNA编辑改写｜依据小宇宙",
          "philosophySourceKeys": [
            "brand-expansion-20260830-052-philosophy"
          ],
          "learnMore": [
            {
              "title": "Beijing nightlife lives on at DDC",
              "displayTitle": "DDC 黄昏黎明俱乐部（神路街店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-052-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-052-store",
            "addressSourceKey": "brand-expansion-20260830-052-store",
            "address": "北京市朝阳区神路街39号地下一层 DDC酒吧"
          }
        },
        "brand-expansion-20260830-053": {
          "expectedName": "Blue Note Beijing（前门店）",
          "canonicalName": "Blue Note Beijing（前门店）",
          "entityRoot": "Blue Note Beijing 前门东大街23号爵士俱乐部",
          "aliases": [
            "Blue Note Beijing",
            "北京蓝调爵士俱乐部",
            "Blue Note 北京"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "音乐现场",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "尊重爵士传统，同时不把爵士当作封闭类型；以高质…",
          "philosophy": "尊重爵士传统，同时不把爵士当作封闭类型；以高质量现场、餐饮和近距离观演形成完整体验。",
          "philosophyAttribution": "DNA编辑改写｜依据北京市文化和旅游局旅游门户",
          "philosophySourceKeys": [
            "brand-expansion-20260830-053-philosophy"
          ],
          "learnMore": [
            {
              "title": "Blue Note Beijing Jazz Club by Chiasmus Partners",
              "displayTitle": "Blue Note Beijing（前门店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-053-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-053-store",
            "addressSourceKey": "brand-expansion-20260830-053-store",
            "address": "北京市东城区前门东大街23号"
          }
        },
        "brand-expansion-20260830-058": {
          "expectedName": "Heim Shanghai（长乐路 Green Station 店）",
          "canonicalName": "Heim Shanghai（长乐路 Green Station 店）",
          "entityRoot": "Heim Shanghai 长乐路462号 Green Station M101/Sauna Room 电子音乐空间",
          "aliases": [
            "Heim",
            "Heim Shanghai",
            "2F.BEDROOM / Heim",
            "Heim Sauna"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "音乐现场",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "为电子音乐社群建立亲密、包容的“家”，强调高质…",
          "philosophy": "为电子音乐社群建立亲密、包容的“家”，强调高质量声音、细尺度舞池与本地场景共同成长。",
          "philosophyAttribution": "DNA编辑改写｜依据Mixmag Asia",
          "philosophySourceKeys": [
            "brand-expansion-20260830-058-philosophy"
          ],
          "learnMore": [
            {
              "title": "Heim brings a new electronic music home to Shanghai",
              "displayTitle": "Heim Shanghai（长乐路 Green Station 店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-058-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-058-store",
            "addressSourceKey": "brand-expansion-20260830-058-store",
            "address": "上海市黄浦区长乐路462号 Green Station M101 / Sauna Room"
          }
        },
        "brand-expansion-20260830-069": {
          "expectedName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "canonicalName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "entityRoot": "Jazz at Lincoln Center Shanghai 南京东路139号固定爵士演出空间",
          "aliases": [
            "Jazz at Lincoln Center Shanghai",
            "林肯爵士乐上海中心",
            "JALC Shanghai"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "音乐现场",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把爵士的过去、现在与未来带到上海，以现场演出、…",
          "philosophy": "把爵士的过去、现在与未来带到上海，以现场演出、教育与艺术家倡议扩大理解爵士的全球社群。",
          "philosophyAttribution": "DNA编辑改写｜依据Jazz at Lincoln Center",
          "philosophySourceKeys": [
            "brand-expansion-20260830-069-philosophy"
          ],
          "learnMore": [
            {
              "title": "外滩爵士夜：都市人的精神SPA",
              "displayTitle": "Jazz at Lincoln Center Shanghai（外滩·中央店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-069-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-069-store",
            "addressSourceKey": "brand-expansion-20260830-069-store",
            "address": "上海市黄浦区南京东路139号美伦大楼（外滩·中央）4层"
          }
        },
        "brand-expansion-20260830-070": {
          "expectedName": "Wigwam Shanghai（C·PARK店）",
          "canonicalName": "Wigwam Shanghai（C·PARK店）",
          "entityRoot": "Wigwam Shanghai 海粟文化广场C·PARK LG1-02 listening bar与音乐空间",
          "aliases": [
            "Wigwam Shanghai",
            "wigwam",
            "Wigwam C·PARK"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "音乐现场",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把listening bar做成可躺、可听、可…",
          "philosophy": "把listening bar做成可躺、可听、可交流的城市帐篷；保留声音的粗粝边缘，为安静惊喜、跨类型DJ和松弛社群留出空间。",
          "philosophyAttribution": "DNA编辑改写｜依据Resident Advisor",
          "philosophySourceKeys": [
            "brand-expansion-20260830-070-philosophy"
          ],
          "learnMore": [
            {
              "title": "据说在上海C·PARK，你的衣服会替你选择club？",
              "displayTitle": "Wigwam Shanghai（C·PARK店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-070-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-070-store",
            "addressSourceKey": "brand-expansion-20260830-070-store",
            "address": "上海市长宁区昭化路658号海粟文化广场C·PARK LG1-02室"
          }
        },
        "brand-expansion-20260830-culture-001": {
          "expectedName": "先锋书店（五台山店）",
          "canonicalName": "先锋书店（五台山店）",
          "entityRoot": "先锋书店在南京五台山体育馆地下车库的总店门店",
          "aliases": [
            "先锋书店五台山店",
            "先锋书店五台山总店",
            "南京先锋书店五台山店",
            "Librairie Avant-Garde Wutaishan"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "创始人钱小华把书店理解为城市公共文化与读者精神…",
          "philosophy": "创始人钱小华把书店理解为城市公共文化与读者精神生活的空间，以人文社科选书、阅读体验、文化活动及相关纸质文创维持其文化中心角色。",
          "philosophyAttribution": "DNA编辑改写｜依据新华网 / 中国新闻出版广电报",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-001-philosophy"
          ],
          "learnMore": [
            {
              "title": "书店没死 独立书店的个性化之路——先锋书店：让“世界列车”在此停留",
              "displayTitle": "先锋书店（五台山店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-001-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "南京"
            ],
            "citiesStatus": "complete",
            "descriptor": "南京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "南京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-001-store",
            "addressSourceKey": "brand-expansion-20260830-culture-001-store",
            "address": "江苏省南京市鼓楼区广州路173号五台山体育馆地下车库（古南都饭店对面）"
          }
        },
        "brand-expansion-20260830-culture-002": {
          "expectedName": "旧天堂书店（Old Heaven Books）",
          "canonicalName": "旧天堂书店（Old Heaven Books）",
          "entityRoot": "深圳华侨城创意文化园北区A5栋120号的独立书店、唱片与活动空间",
          "aliases": [
            "旧天堂书店 Old Heaven Books",
            "Old Heaven Books"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "不仅是一家卖书与唱片的店，也把私人阅读、独立音…",
          "philosophy": "不仅是一家卖书与唱片的店，也把私人阅读、独立音乐和公共文化活动叠合成可持续发生的城市文化场域。",
          "philosophyAttribution": "DNA编辑改写｜依据深圳新闻网 / 深圳艺文惠",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-002-philosophy"
          ],
          "learnMore": [
            {
              "title": "在旧天堂书店，邂逅好书、音乐与有趣的灵魂",
              "displayTitle": "旧天堂书店（Old Heaven Books）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-002-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "complete",
            "descriptor": "深圳指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "深圳当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-002-store",
            "addressSourceKey": "brand-expansion-20260830-culture-002-store",
            "address": "广东省深圳市南山区华侨城创意文化园北区A5栋120#"
          }
        },
        "brand-expansion-20260830-culture-003": {
          "expectedName": "1200BOOKSHOP体育东总店",
          "canonicalName": "1200BOOKSHOP体育东总店",
          "entityRoot": "广州市天河区体育东路27号的1200BOOKSHOP总店",
          "aliases": [
            "1200bookshop体育东店",
            "1200bookshop（体育东店）"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "为城市点燃一盏深夜的灯，把书店作为深夜仍可停留…",
          "philosophy": "为城市点燃一盏深夜的灯，把书店作为深夜仍可停留、阅读、相遇和暂时安放自己的温暖空间。",
          "philosophyAttribution": "DNA编辑改写｜依据香港商报（来源：南方周末知道）",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-003-philosophy"
          ],
          "learnMore": [
            {
              "title": "一个徒步者兼书店老板的故事",
              "displayTitle": "1200BOOKSHOP体育东总店的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-003-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "广州"
            ],
            "citiesStatus": "complete",
            "descriptor": "广州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "广州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-003-store",
            "addressSourceKey": "brand-expansion-20260830-culture-003-store",
            "address": "广东省广州市天河区体育东路27号"
          }
        },
        "brand-expansion-20260830-culture-004": {
          "expectedName": "大隐书局（创智天地店）",
          "canonicalName": "大隐书局（创智天地店）",
          "entityRoot": "上海市杨浦区淞沪路333号的创智天地门店",
          "aliases": [
            "大隐书局创智天地店",
            "大隐书局·创智天地店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以‘一店一策’回应大学路高校学生与园区白领，把…",
          "philosophy": "以‘一店一策’回应大学路高校学生与园区白领，把图书、文创、饮品、展览和活动组织为开放的知识与文化消费空间。",
          "philosophyAttribution": "DNA编辑改写｜依据人民网-上海频道",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-004-philosophy"
          ],
          "learnMore": [
            {
              "title": "‘大隐’隐于市，上海创智天地点亮城市阅读之光",
              "displayTitle": "大隐书局（创智天地店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-004-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-004-store",
            "addressSourceKey": "brand-expansion-20260830-culture-004-store",
            "address": "上海市杨浦区淞沪路333号"
          }
        },
        "brand-expansion-20260830-culture-005": {
          "expectedName": "建投书局·浦江店",
          "canonicalName": "建投书局·浦江店",
          "entityRoot": "上海虹口北外滩公平路18号8栋嘉昱大厦的建投书局门店",
          "aliases": [
            "建投书局浦江店",
            "建投书局上海浦江店",
            "JIC Books",
            "JIC Bookstore Pujiang"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以人物传记为主题，从人物经历进入历史与文化，并…",
          "philosophy": "以人物传记为主题，从人物经历进入历史与文化，并用高挑阅读大厅、咖啡、展览和活动构成以完整阅读为核心的复合文化空间。",
          "philosophyAttribution": "DNA编辑改写｜依据建投书店投资有限公司",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-005-philosophy"
          ],
          "learnMore": [
            {
              "title": "Where stylish design meets literary substance",
              "displayTitle": "建投书局·浦江店的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-005-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-005-store",
            "addressSourceKey": "brand-expansion-20260830-culture-005-store",
            "address": "上海市虹口区公平路18号8栋嘉昱大厦一层"
          }
        },
        "brand-expansion-20260830-culture-006": {
          "expectedName": "万圣书园·优盛阅读空间",
          "canonicalName": "万圣书园·优盛阅读空间",
          "entityRoot": "2023-12-31重张于北京五道口购物中心/优盛大厦三、四层的万圣书园",
          "aliases": [
            "万圣书园",
            "万圣书园五道口购物中心店",
            "万圣·优盛阅读空间",
            "All Sages Bookstore"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "坚持人文学术选书与‘通过阅读，获得解放’，把东…",
          "philosophy": "坚持人文学术选书与‘通过阅读，获得解放’，把东西方作品及可成一家之言的声音并置，以书为核心形成知识人交流空间。",
          "philosophyAttribution": "DNA编辑改写｜依据书店还在 / 搜狐转载",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-006-philosophy"
          ],
          "learnMore": [
            {
              "title": "万圣书园创办人刘苏里访谈稿（近完整版）",
              "displayTitle": "万圣书园·优盛阅读空间的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-006-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-006-store",
            "addressSourceKey": "brand-expansion-20260830-culture-006-store",
            "address": "北京市海淀区成府路28号五道口购物中心三层（空间延伸至四层，出入口在三层）"
          }
        },
        "brand-expansion-20260830-culture-007": {
          "expectedName": "模范书局·诗空间（中华圣公会教堂店）",
          "canonicalName": "模范书局·诗空间（中华圣公会教堂店）",
          "entityRoot": "北京市西城区佟麟阁路85号中华圣公会救主堂旧址内的诗空间门店",
          "aliases": [
            "模范书局诗空间",
            "模范书局·诗空间中华圣公会教堂店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "在不刻意雕琢百年教堂的前提下，以诗歌、古籍、雕…",
          "philosophy": "在不刻意雕琢百年教堂的前提下，以诗歌、古籍、雕版、艺术展与公共交流激活历史建筑，形成感知艺术、触摸文史、品味生活的开放平台。",
          "philosophyAttribution": "DNA编辑改写｜依据新华网",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-007-philosophy"
          ],
          "learnMore": [
            {
              "title": "从《上海上》到《局中局》 模范书局的线条艺术",
              "displayTitle": "模范书局·诗空间（中华圣公会教堂店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-007-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-007-store",
            "addressSourceKey": "brand-expansion-20260830-culture-007-store",
            "address": "北京市西城区佟麟阁路85号院内中华圣公会教堂旧址"
          }
        },
        "brand-expansion-20260830-culture-009": {
          "expectedName": "kubrick（油麻地店）",
          "canonicalName": "kubrick（油麻地店）",
          "entityRoot": "香港油麻地众坊街3号骏发花园戏院大楼H2地铺、毗邻百老汇电影中心的kubrick书店/咖啡店",
          "aliases": [
            "kubrick Hong Kong",
            "kubrick bookstore & café",
            "kubrick油麻地店",
            "Kubrick Bookshop"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "从艺术电影观众的需求出发，以电影、艺术设计、独…",
          "philosophy": "从艺术电影观众的需求出发，以电影、艺术设计、独立出版、音乐影碟与咖啡共同组成在观影前后可停留交流的文化空间。",
          "philosophyAttribution": "DNA编辑改写｜依据kubrick官方Bookshop.org店铺页",
          "philosophySourceKeys": [
            "brand-expansion-20260830-culture-009-philosophy"
          ],
          "learnMore": [
            {
              "title": "香港Kubrick书店——杂揉影像、书本与咖啡香的空间形变",
              "displayTitle": "kubrick（油麻地店）的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-culture-009-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "香港"
            ],
            "citiesStatus": "complete",
            "descriptor": "香港指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "香港当前指定空间",
            "citySourceKey": "brand-expansion-20260830-culture-009-store",
            "addressSourceKey": "brand-expansion-20260830-culture-009-store",
            "address": "香港九龙油麻地众坊街3号骏发花园戏院大楼H2地铺"
          }
        },
        "brand-expansion-20260830-dining-bars-002": {
          "expectedName": "Obscura by 唐香",
          "canonicalName": "Obscura by 唐香",
          "entityRoot": "Obscura by 唐香 at Xikang Road",
          "aliases": [
            "Obscura",
            "Obscura Shanghai",
            "Obscura by Tangxiang"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "餐饮与夜间体验",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "张建团队以中国地域味觉记忆为根，把云贵川、福建…",
          "philosophy": "张建团队以中国地域味觉记忆为根，把云贵川、福建和粤菜技法等传统风味拆解后，用当代套餐结构重新组织，强调温度、趣味与可辨识的中国味。",
          "philosophyAttribution": "DNA编辑改写｜依据名厨MINGCHU",
          "philosophySourceKeys": [
            "brand-expansion-20260830-dining-bars-002-philosophy"
          ],
          "learnMore": [
            {
              "title": "新中餐‘鼻祖’ Obscura 换主厨了？！97 年新主厨来头也不小……",
              "displayTitle": "Obscura by 唐香的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-dining-bars-002-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-dining-bars-002-store",
            "addressSourceKey": "brand-expansion-20260830-dining-bars-002-store",
            "address": "上海市静安区西康路538号唐香文化空间"
          }
        },
        "brand-expansion-20260830-dining-bars-004": {
          "expectedName": "Lamdre",
          "canonicalName": "Lamdre",
          "entityRoot": "Lamdre Beijing",
          "aliases": [
            "Lamdre Beijing",
            "兰斋",
            "Lamdre兰斋"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "餐饮与夜间体验",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以纯植物食材建立精致餐饮语言，不模拟肉食，而通…",
          "philosophy": "以纯植物食材建立精致餐饮语言，不模拟肉食，而通过发酵、火候、质地与季节性放大蔬食本身，以安静而克制的空间承载完整体验。",
          "philosophyAttribution": "DNA编辑改写｜依据Asia's 50 Best Restaurants",
          "philosophySourceKeys": [
            "brand-expansion-20260830-dining-bars-004-philosophy"
          ],
          "learnMore": [
            {
              "title": "Lamdre | Asia's 50 Best Restaurants 2026",
              "displayTitle": "Lamdre的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-dining-bars-004-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-dining-bars-004-store",
            "addressSourceKey": "brand-expansion-20260830-dining-bars-004-store",
            "address": "北京市朝阳区工体北路4号院14幢一层01室"
          }
        },
        "brand-expansion-20260830-dining-bars-005": {
          "expectedName": "YAYA's Pasta Bar",
          "canonicalName": "YAYA's Pasta Bar",
          "entityRoot": "YAYA's Pasta Bar",
          "aliases": [
            "YAYA's",
            "Yaya's Pasta Bar",
            "YAYAS",
            "YAYA'S铜仁路"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "餐饮与夜间体验",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把意面从正式西餐语境拉回轻松的街区小馆，以当季…",
          "philosophy": "把意面从正式西餐语境拉回轻松的街区小馆，以当季食材、意中混合味觉和开放友好的用餐氛围做现代意面。",
          "philosophyAttribution": "DNA编辑改写｜依据YAYA's Pasta Bar",
          "philosophySourceKeys": [
            "brand-expansion-20260830-dining-bars-005-philosophy"
          ],
          "learnMore": [
            {
              "title": "Yaya's",
              "displayTitle": "YAYA's Pasta Bar的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-dining-bars-005-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "descriptor": "上海指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "上海当前指定空间",
            "citySourceKey": "brand-expansion-20260830-dining-bars-005-store",
            "addressSourceKey": "brand-expansion-20260830-dining-bars-005-store",
            "address": "上海市静安区铜仁路329号"
          }
        },
        "brand-expansion-20260830-dining-bars-011": {
          "expectedName": "Hope & Sesame Guangzhou · 庙前冰室",
          "canonicalName": "Hope & Sesame Guangzhou · 庙前冰室",
          "entityRoot": "Hope & Sesame Guangzhou at Miaoqian Xijie 58",
          "aliases": [
            "Hope & Sesame",
            "Hope and Sesame",
            "庙前冰室",
            "Hope & Sesame Guangzhou"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "餐饮与夜间体验",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以广式冰室的日常外壳包裹现代鸡尾酒实验室，用澄…",
          "philosophy": "以广式冰室的日常外壳包裹现代鸡尾酒实验室，用澄清、低温、旋蒸等技术重写粤味、酱料和集体记忆，同时把专业度隐藏在轻松待客之后。",
          "philosophyAttribution": "DNA编辑改写｜依据Hope & Sesame / Hope Group",
          "philosophySourceKeys": [
            "brand-expansion-20260830-dining-bars-011-philosophy"
          ],
          "learnMore": [
            {
              "title": "Hope & Sesame | Asia's 50 Best Bars 2026 | Ranked No. 1",
              "displayTitle": "Hope & Sesame Guangzhou · 庙前冰室的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-dining-bars-011-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "广州"
            ],
            "citiesStatus": "complete",
            "descriptor": "广州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "广州当前指定空间",
            "citySourceKey": "brand-expansion-20260830-dining-bars-011-store",
            "addressSourceKey": "brand-expansion-20260830-dining-bars-011-store",
            "address": "广东省广州市越秀区庙前西街58号"
          }
        },
        "brand-expansion-20260830-dining-bars-012": {
          "expectedName": "悠航SLOWBOAT·三里屯酿酒坊",
          "canonicalName": "悠航SLOWBOAT·三里屯酿酒坊",
          "entityRoot": "Slow Boat Brewery / 悠航SLOWBOAT",
          "aliases": [
            "Slow Boat Brewery",
            "Slow Boat Sanlitun Brewpub",
            "悠航鲜啤",
            "悠航SLOWBOAT",
            "三里屯酿酒坊"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "餐饮与夜间体验",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把酿造设备直接置于三层消费动线中，让精酿生产成…",
          "philosophy": "把酿造设备直接置于三层消费动线中，让精酿生产成为空间表演；以北京在地社群、鲜啤和汉堡构成低门槛的城市酿酒坊。",
          "philosophyAttribution": "DNA编辑改写｜依据Slow Boat Brewery",
          "philosophySourceKeys": [
            "brand-expansion-20260830-dining-bars-012-philosophy"
          ],
          "learnMore": [
            {
              "title": "Slow Boat Sanlitun",
              "displayTitle": "悠航SLOWBOAT·三里屯酿酒坊的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-dining-bars-012-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-dining-bars-012-store",
            "addressSourceKey": "brand-expansion-20260830-dining-bars-012-store",
            "address": "北京市朝阳区南三里屯路6号"
          }
        },
        "brand-expansion-20260830-dining-bars-013": {
          "expectedName": "京A精酿餐吧·798店",
          "canonicalName": "京A精酿餐吧·798店",
          "entityRoot": "Jing-A Brewing / 京A",
          "aliases": [
            "Jing-A Brewing",
            "Jing-A Taproom",
            "京A",
            "京A精酿餐吧",
            "Jing-A 798"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "餐饮与夜间体验",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "用北京身份、中文故事和本地食材酿造具有地域辨识…",
          "philosophy": "用北京身份、中文故事和本地食材酿造具有地域辨识度的啤酒，并把798旧工业空间转成开放、直接、可社交的精酿餐吧。",
          "philosophyAttribution": "DNA编辑改写｜依据Jing-A Brewing",
          "philosophySourceKeys": [
            "brand-expansion-20260830-dining-bars-013-philosophy"
          ],
          "learnMore": [
            {
              "title": "Jing A 798",
              "displayTitle": "京A精酿餐吧·798店的经营与空间方法",
              "sourceKey": "brand-expansion-20260830-dining-bars-013-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-expansion-20260830-dining-bars-013-store",
            "addressSourceKey": "brand-expansion-20260830-dining-bars-013-store",
            "address": "北京市朝阳区酒仙桥路2号院798艺术区D-06"
          }
        },
        "brand-exp80-i-107": {
          "expectedName": "樂班Le’ban农场餐厅（米禾农场店）",
          "canonicalName": "樂班Le’ban农场餐厅（米禾农场店）",
          "entityRoot": "樂班Le’ban农场餐厅（米禾农场店）",
          "aliases": [
            "Le’ban",
            "Le.ban",
            "乐班农场餐厅",
            "樂班农场餐厅"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "农场餐饮",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“传递健康，分享美好”为核心，把农场、自然食…",
          "philosophy": "以“传递健康，分享美好”为核心，把农场、自然食材、家庭餐桌与可持续生活连接起来。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-107-philosophy"
          ],
          "learnMore": [
            {
              "title": "MOS木石设计｜乐班农场餐厅",
              "displayTitle": "樂班Le’ban农场餐厅（米禾农场店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-107-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "西安"
            ],
            "citiesStatus": "complete",
            "descriptor": "西安指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "西安当前指定空间",
            "citySourceKey": "brand-exp80-i-107-store",
            "addressSourceKey": "brand-exp80-i-107-store",
            "address": "西安市未央区罗高路168号米禾农场P2北侧"
          }
        },
        "brand-exp80-i-108": {
          "expectedName": "裕莲茶楼（西安万象城店）",
          "canonicalName": "裕莲茶楼（西安万象城店）",
          "entityRoot": "裕莲茶楼（西安万象城店）",
          "aliases": [
            "裕莲",
            "YULIAN TEAHOUSE",
            "裕莲茶楼万象城店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "当代茶馆",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把茶的产地、器物与人的温度放入当代茶楼，让饮茶…",
          "philosophy": "把茶的产地、器物与人的温度放入当代茶楼，让饮茶成为可停留、可交流的日常体验。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-108-philosophy"
          ],
          "learnMore": [
            {
              "title": "YEAP LAB｜裕莲茶楼西安万象城店",
              "displayTitle": "裕莲茶楼（西安万象城店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-108-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "西安"
            ],
            "citiesStatus": "complete",
            "descriptor": "西安指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "西安当前指定空间",
            "citySourceKey": "brand-exp80-i-108-store",
            "addressSourceKey": "brand-exp80-i-108-store",
            "address": "西安市雁塔区雁展路1111号西安万象城B2层B212"
          }
        },
        "brand-exp80-i-111": {
          "expectedName": "米林爸爸可颂（下浩里店）",
          "canonicalName": "米林爸爸可颂（下浩里店）",
          "entityRoot": "米林爸爸可颂（下浩里店）",
          "aliases": [
            "米林爸爸",
            "米林爸爸可颂",
            "MILINBABA"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "烘焙咖啡复合店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以年轻、叛逆和先锋的表达把烘焙、咖啡、零售与活…",
          "philosophy": "以年轻、叛逆和先锋的表达把烘焙、咖啡、零售与活动组合成可参与的城市生活空间。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-111-philosophy"
          ],
          "learnMore": [
            {
              "title": "赤橙建筑空间｜米林爸爸可颂下浩里店",
              "displayTitle": "米林爸爸可颂（下浩里店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-111-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "重庆"
            ],
            "citiesStatus": "complete",
            "descriptor": "重庆指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "重庆当前指定空间",
            "citySourceKey": "brand-exp80-i-111-store",
            "addressSourceKey": "brand-exp80-i-111-store",
            "address": "重庆市南岸区龙门浩街道下浩里1号口88号"
          }
        },
        "brand-exp80-i-113": {
          "expectedName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "canonicalName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "entityRoot": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "aliases": [
            "虫洞书店",
            "晓学堂虫洞书店",
            "X-Readspace Wormhole Bookstore"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以在地文化和文本为入口，让书店成为观察鼓浪屿、…",
          "philosophy": "以在地文化和文本为入口，让书店成为观察鼓浪屿、连接旅行者与社区的“虫洞”。",
          "philosophyAttribution": "DNA编辑改写｜依据厦门日报/厦门网",
          "philosophySourceKeys": [
            "brand-exp80-i-113-philosophy"
          ],
          "learnMore": [
            {
              "title": "鼓浪屿虫洞书店：以文字打开岛屿",
              "displayTitle": "晓学堂·虫洞书店（鼓浪屿海天堂构）的经营与空间方法",
              "sourceKey": "brand-exp80-i-113-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "厦门"
            ],
            "citiesStatus": "complete",
            "descriptor": "厦门指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "厦门当前指定空间",
            "citySourceKey": "brand-exp80-i-113-store",
            "addressSourceKey": "brand-exp80-i-113-store",
            "address": "厦门市思明区鼓浪屿福建路34号海天堂构"
          }
        },
        "brand-exp80-i-115": {
          "expectedName": "深圳书城湾区城（湾区之眼）",
          "canonicalName": "深圳书城湾区城（湾区之眼）",
          "entityRoot": "深圳书城湾区城（湾区之眼）",
          "aliases": [
            "湾区之眼",
            "深圳书城湾区城",
            "Bay Area Eye"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以书为核心，把阅读、艺术、科技和公共交流组织成…",
          "philosophy": "以书为核心，把阅读、艺术、科技和公共交流组织成面向湾区的城市文化客厅。",
          "philosophyAttribution": "DNA编辑改写｜依据深圳市人民政府",
          "philosophySourceKeys": [
            "brand-exp80-i-115-philosophy"
          ],
          "learnMore": [
            {
              "title": "湾区之眼：新型城市文化综合体",
              "displayTitle": "深圳书城湾区城（湾区之眼）的经营与空间方法",
              "sourceKey": "brand-exp80-i-115-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "complete",
            "descriptor": "深圳指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "深圳当前指定空间",
            "citySourceKey": "brand-exp80-i-115-store",
            "addressSourceKey": "brand-exp80-i-115-store",
            "address": "深圳市宝安区新安街道海滨社区宝华路1号湾区之眼"
          }
        },
        "brand-exp80-i-116": {
          "expectedName": "Oneup（深圳万象天地店）",
          "canonicalName": "Oneup（深圳万象天地店）",
          "entityRoot": "Oneup（深圳万象天地店）",
          "aliases": [
            "Oneup",
            "ONEUP万象天地店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "运动生活方式零售",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把运动从单一装备消费扩展为城市社交、审美与日常…",
          "philosophy": "把运动从单一装备消费扩展为城市社交、审美与日常生活方式。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-116-philosophy"
          ],
          "learnMore": [
            {
              "title": "of gaaarden design｜Oneup深圳万象天地店",
              "displayTitle": "Oneup（深圳万象天地店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-116-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "complete",
            "descriptor": "深圳指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "深圳当前指定空间",
            "citySourceKey": "brand-exp80-i-116-store",
            "addressSourceKey": "brand-exp80-i-116-store",
            "address": "深圳市南山区粤海街道深南大道9668号万象天地L3层L325"
          }
        },
        "brand-exp80-i-117": {
          "expectedName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "canonicalName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "entityRoot": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "aliases": [
            "KALI HOUSE",
            "KALI ART",
            "KALI HOUSE AND CAFE"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "艺术生活方式空间",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以艺术驱动生活方式，把展览、咖啡、零售与公共事…",
          "philosophy": "以艺术驱动生活方式，把展览、咖啡、零售与公共事件组合成持续发生的文化平台。",
          "philosophyAttribution": "DNA编辑改写｜依据KALI ART",
          "philosophySourceKeys": [
            "brand-exp80-i-117-philosophy"
          ],
          "learnMore": [
            {
              "title": "KALI HOUSE & CAFE｜承迹景观",
              "displayTitle": "KALI HOUSE & CAFE（深圳五矿金融大厦）的经营与空间方法",
              "sourceKey": "brand-exp80-i-117-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "complete",
            "descriptor": "深圳指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "深圳当前指定空间",
            "citySourceKey": "brand-exp80-i-117-store",
            "addressSourceKey": "brand-exp80-i-117-store",
            "address": "深圳市福田区福华一路五矿金融大厦1—2层"
          }
        },
        "brand-exp80-i-118": {
          "expectedName": "覔书店（深圳壹方城店）",
          "canonicalName": "覔书店（深圳壹方城店）",
          "entityRoot": "覔书店（深圳壹方城店）",
          "aliases": [
            "覔书店",
            "觅书店",
            "MI BOOKSTORE壹方城店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "让书店成为阅读、艺术展陈、亲子活动与城市社交共…",
          "philosophy": "让书店成为阅读、艺术展陈、亲子活动与城市社交共同发生的生活文化空间。",
          "philosophyAttribution": "DNA编辑改写｜依据新浪",
          "philosophySourceKeys": [
            "brand-exp80-i-118-philosophy"
          ],
          "learnMore": [
            {
              "title": "覔书店：用文化内容连接城市生活",
              "displayTitle": "覔书店（深圳壹方城店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-118-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "complete",
            "descriptor": "深圳指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "深圳当前指定空间",
            "citySourceKey": "brand-exp80-i-118-store",
            "addressSourceKey": "brand-exp80-i-118-store",
            "address": "深圳市宝安区新湖路99号壹方城3层"
          }
        },
        "brand-exp80-i-119": {
          "expectedName": "Kurasu（深圳湾万象城店）",
          "canonicalName": "Kurasu（深圳湾万象城店）",
          "entityRoot": "Kurasu（深圳湾万象城店）",
          "aliases": [
            "Kurasu Shenzhen",
            "Kurasu咖啡深圳湾万象城店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "精品咖啡",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "通过咖啡、器具与知识分享连接本地社群，让高品质…",
          "philosophy": "通过咖啡、器具与知识分享连接本地社群，让高品质咖啡成为可进入的日常。",
          "philosophyAttribution": "DNA编辑改写｜依据Kurasu",
          "philosophySourceKeys": [
            "brand-exp80-i-119-philosophy"
          ],
          "learnMore": [
            {
              "title": "了建筑｜Kurasu咖啡深圳湾万象城店",
              "displayTitle": "Kurasu（深圳湾万象城店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-119-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "complete",
            "descriptor": "深圳指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "深圳当前指定空间",
            "citySourceKey": "brand-exp80-i-119-store",
            "addressSourceKey": "brand-exp80-i-119-store",
            "address": "深圳市南山区深圳湾万象城二期C区L1层CL107"
          }
        },
        "brand-exp80-i-120": {
          "expectedName": "幸子食堂（胜利街店）",
          "canonicalName": "幸子食堂（胜利街店）",
          "entityRoot": "幸子食堂（胜利街店）",
          "aliases": [
            "幸子食堂",
            "Xi Zi Bistro"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "社区食堂",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "“在社区生长，服务好社区”，以开放厨房、街边餐…",
          "philosophy": "“在社区生长，服务好社区”，以开放厨房、街边餐桌和邻里关系建立日常食堂。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-120-philosophy"
          ],
          "learnMore": [
            {
              "title": "向生设计事务所｜幸子食堂",
              "displayTitle": "幸子食堂（胜利街店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-120-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "武汉"
            ],
            "citiesStatus": "complete",
            "descriptor": "武汉指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "武汉当前指定空间",
            "citySourceKey": "brand-exp80-i-120-store",
            "addressSourceKey": "brand-exp80-i-120-store",
            "address": "武汉市江岸区胜利街339-5号"
          }
        },
        "brand-exp80-i-121": {
          "expectedName": "精武有食集（武汉越秀国金天地）",
          "canonicalName": "精武有食集（武汉越秀国金天地）",
          "entityRoot": "精武有食集（武汉越秀国金天地）",
          "aliases": [
            "精武有食集",
            "JINGWU FOOD MARKET"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "城市食集",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“檐下烟火”为叙事，把武汉街巷、在地餐饮与全…",
          "philosophy": "以“檐下烟火”为叙事，把武汉街巷、在地餐饮与全天候公共就餐组织成可持续运营的城市食集。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-121-philosophy"
          ],
          "learnMore": [
            {
              "title": "越秀商管全国人文标杆IP“精武有食集”",
              "displayTitle": "精武有食集（武汉越秀国金天地）的经营与空间方法",
              "sourceKey": "brand-exp80-i-121-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "武汉"
            ],
            "citiesStatus": "complete",
            "descriptor": "武汉指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "武汉当前指定空间",
            "citySourceKey": "brand-exp80-i-121-store",
            "addressSourceKey": "brand-exp80-i-121-store",
            "address": "武汉市江汉区精武路1号越秀国际金融汇B1层"
          }
        },
        "brand-exp80-i-122": {
          "expectedName": "HOJI Bistro（西安量子晨店）",
          "canonicalName": "HOJI Bistro（西安量子晨店）",
          "entityRoot": "HOJI Bistro（西安量子晨店）",
          "aliases": [
            "HOJI",
            "HOJI Bistro量子晨"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "当代小酒馆",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以食物、社交和空间共同构成真实城市界面，强调材…",
          "philosophy": "以食物、社交和空间共同构成真实城市界面，强调材料诚实、开放交流与夜间活力。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-122-philosophy"
          ],
          "learnMore": [
            {
              "title": "超级理想建筑工作室｜HOJI Bistro",
              "displayTitle": "HOJI Bistro（西安量子晨店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-122-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "西安"
            ],
            "citiesStatus": "complete",
            "descriptor": "西安指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "西安当前指定空间",
            "citySourceKey": "brand-exp80-i-122-store",
            "addressSourceKey": "brand-exp80-i-122-store",
            "address": "西安市雁塔区西影路466号量子晨街区1层"
          }
        },
        "brand-exp80-i-123": {
          "expectedName": "乌鹊JIU食肆（苏州首店）",
          "canonicalName": "乌鹊JIU食肆（苏州首店）",
          "entityRoot": "乌鹊JIU食肆（苏州首店）",
          "aliases": [
            "乌鹊JIU",
            "乌鹊食肆",
            "WUQUE JIU"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "当代餐饮",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“JIU＝酒、久、旧”的多义性组织品牌，把旧…",
          "philosophy": "以“JIU＝酒、久、旧”的多义性组织品牌，把旧物再用、在地日常和低成本高情绪体验结合。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-123-philosophy"
          ],
          "learnMore": [
            {
              "title": "乌鹊JIU食肆 / 木月建筑",
              "displayTitle": "乌鹊JIU食肆（苏州首店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-123-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "complete",
            "descriptor": "苏州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "苏州当前指定空间",
            "citySourceKey": "brand-exp80-i-123-store",
            "addressSourceKey": "brand-exp80-i-123-store",
            "address": "苏州市姑苏区乌鹊桥路53号乐村内"
          }
        },
        "brand-exp80-i-124": {
          "expectedName": "河谷咖啡（仙居神仙居店）",
          "canonicalName": "河谷咖啡（仙居神仙居店）",
          "entityRoot": "河谷咖啡（仙居神仙居店）",
          "aliases": [
            "河谷咖啡神仙居店",
            "RIVER VALLEY COFFEE"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "精品咖啡",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“生活就要浪起来”为态度，把咖啡店做成水系、…",
          "philosophy": "以“生活就要浪起来”为态度，把咖啡店做成水系、自然与旅行生活共生的目的地。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-124-philosophy"
          ],
          "learnMore": [
            {
              "title": "平介设计｜河谷咖啡",
              "displayTitle": "河谷咖啡（仙居神仙居店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-124-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "台州"
            ],
            "citiesStatus": "complete",
            "descriptor": "台州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "台州当前指定空间",
            "citySourceKey": "brand-exp80-i-124-store",
            "addressSourceKey": "brand-exp80-i-124-store",
            "address": "台州市仙居县神仙居旅游度假区希尔顿酒店东南约300米公园内"
          }
        },
        "brand-exp80-i-125": {
          "expectedName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "canonicalName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "entityRoot": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "aliases": [
            "Fieldwork Baker",
            "麦田工坊",
            "FIELDWORK BAKER & CO."
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "手作烘焙",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以社区、手作和可持续为核心，让开放烘焙、共享长…",
          "philosophy": "以社区、手作和可持续为核心，让开放烘焙、共享长桌与日常邻里关系共同构成品牌。",
          "philosophyAttribution": "DNA编辑改写｜依据Hcreates",
          "philosophySourceKeys": [
            "brand-exp80-i-125-philosophy"
          ],
          "learnMore": [
            {
              "title": "Fieldwork Baker & Co.",
              "displayTitle": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-125-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "宁波"
            ],
            "citiesStatus": "complete",
            "descriptor": "宁波指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "宁波当前指定空间",
            "citySourceKey": "brand-exp80-i-125-store",
            "addressSourceKey": "brand-exp80-i-125-store",
            "address": "宁波市鄞州区钱湖北路267号宁波万象汇L1层L129"
          }
        },
        "brand-exp80-i-126": {
          "expectedName": "shanya山下洋食（杭州印店）",
          "canonicalName": "shanya山下洋食（杭州印店）",
          "entityRoot": "shanya山下洋食（杭州印店）",
          "aliases": [
            "shanya",
            "山下洋食",
            "SHANYA WESTERN FOOD"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "西式餐饮",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“山下木屋”的亲近感承载洋食，把城市中的短暂…",
          "philosophy": "以“山下木屋”的亲近感承载洋食，把城市中的短暂停留转化为温暖、松弛的日常。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-126-philosophy"
          ],
          "learnMore": [
            {
              "title": "shanya山下洋食 / 现象设计",
              "displayTitle": "shanya山下洋食（杭州印店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-126-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "杭州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "杭州当前指定空间",
            "citySourceKey": "brand-exp80-i-126-store",
            "addressSourceKey": "brand-exp80-i-126-store",
            "address": "杭州市滨江区江晖路2030号杭州印A座1楼6号"
          }
        },
        "brand-exp80-i-128": {
          "expectedName": "SANG TEA桑茶（杭州中山北路店）",
          "canonicalName": "SANG TEA桑茶（杭州中山北路店）",
          "entityRoot": "SANG TEA桑茶（杭州中山北路店）",
          "aliases": [
            "SANG TEA",
            "桑茶",
            "SANG TEA中山北路店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "当代茶馆",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "把茶从自然带入城市，以竹、手作和可停留的街边空…",
          "philosophy": "把茶从自然带入城市，以竹、手作和可停留的街边空间建立当代东方茶生活。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-128-philosophy"
          ],
          "learnMore": [
            {
              "title": "知见设计工作室｜SANG TEA桑茶中山北路店",
              "displayTitle": "SANG TEA桑茶（杭州中山北路店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-128-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "杭州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "杭州当前指定空间",
            "citySourceKey": "brand-exp80-i-128-store",
            "addressSourceKey": "brand-exp80-i-128-store",
            "address": "杭州市拱墅区天水街道中山北路373-4号"
          }
        },
        "brand-exp80-i-130": {
          "expectedName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "canonicalName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "entityRoot": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "aliases": [
            "富贵山下",
            "富贵山下日茶夜酒"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "日茶夜酒餐饮",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "用“日茶夜酒”重译金陵传统，把白天茶叙、夜间小…",
          "philosophy": "用“日茶夜酒”重译金陵传统，把白天茶叙、夜间小酒与当代社交放进同一品牌场景。",
          "philosophyAttribution": "DNA编辑改写｜依据Hi设计",
          "philosophySourceKeys": [
            "brand-exp80-i-130-philosophy"
          ],
          "learnMore": [
            {
              "title": "TRIOSTUDIO三厘社｜富贵山下",
              "displayTitle": "富贵山下·日茶夜酒（金陵长乐坊店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-130-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "南京"
            ],
            "citiesStatus": "complete",
            "descriptor": "南京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "南京当前指定空间",
            "citySourceKey": "brand-exp80-i-130-store",
            "addressSourceKey": "brand-exp80-i-130-store",
            "address": "南京市秦淮区长乐路132号金陵长乐坊F1-50"
          }
        },
        "brand-exp80-i-131": {
          "expectedName": "32HOW（厦门华新路店）",
          "canonicalName": "32HOW（厦门华新路店）",
          "entityRoot": "32HOW（厦门华新路店）",
          "aliases": [
            "32 HOW",
            "32HOW咖啡",
            "32HOW华新路"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "精品咖啡",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "认真做好每一杯咖啡，同时保留老别墅、庭院与社区…",
          "philosophy": "认真做好每一杯咖啡，同时保留老别墅、庭院与社区节奏，让咖啡成为慢生活入口。",
          "philosophyAttribution": "DNA编辑改写｜依据咖啡工房",
          "philosophySourceKeys": [
            "brand-exp80-i-131-philosophy"
          ],
          "learnMore": [
            {
              "title": "厦门32HOW咖啡馆品牌与经营观察",
              "displayTitle": "32HOW（厦门华新路店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-131-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "厦门"
            ],
            "citiesStatus": "complete",
            "descriptor": "厦门指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "厦门当前指定空间",
            "citySourceKey": "brand-exp80-i-131-store",
            "addressSourceKey": "brand-exp80-i-131-store",
            "address": "厦门市思明区华新路32号"
          }
        },
        "brand-exp80-i-132": {
          "expectedName": "可一书店·仙林艺术中心",
          "canonicalName": "可一书店·仙林艺术中心",
          "entityRoot": "可一书店·仙林艺术中心",
          "aliases": [
            "可一书店",
            "可一书店仙林店",
            "KEYI BOOKSTORE"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "文化书店",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "“卖的不仅是书，而是愿意待下来的空间”，以阅读…",
          "philosophy": "“卖的不仅是书，而是愿意待下来的空间”，以阅读、展览、教育和公共活动形成城市文化共同体。",
          "philosophyAttribution": "DNA编辑改写｜依据中国江苏网",
          "philosophySourceKeys": [
            "brand-exp80-i-132-philosophy"
          ],
          "learnMore": [
            {
              "title": "可一书店·仙林艺术中心：让人愿意待下来的空间",
              "displayTitle": "可一书店·仙林艺术中心的经营与空间方法",
              "sourceKey": "brand-exp80-i-132-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "南京"
            ],
            "citiesStatus": "complete",
            "descriptor": "南京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "南京当前指定空间",
            "citySourceKey": "brand-exp80-i-132-store",
            "addressSourceKey": "brand-exp80-i-132-store",
            "address": "南京市栖霞区杉湖东路9号"
          }
        },
        "brand-exp80-i-133": {
          "expectedName": "之仓咖啡（西安米禾农场店）",
          "canonicalName": "之仓咖啡（西安米禾农场店）",
          "entityRoot": "之仓咖啡（西安米禾农场店）",
          "aliases": [
            "之仓",
            "之仓咖啡米禾农场店",
            "ZHICANG COFFEE"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "精品咖啡",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“仓”作为容纳地方景观、农事文化和公共相遇的…",
          "philosophy": "以“仓”作为容纳地方景观、农事文化和公共相遇的容器，让建筑与田野共同构成咖啡体验。",
          "philosophyAttribution": "DNA编辑改写｜依据gooood谷德设计网",
          "philosophySourceKeys": [
            "brand-exp80-i-133-philosophy"
          ],
          "learnMore": [
            {
              "title": "之仓咖啡，西安 / MOS木石设计",
              "displayTitle": "之仓咖啡（西安米禾农场店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-133-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "西安"
            ],
            "citiesStatus": "complete",
            "descriptor": "西安指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "西安当前指定空间",
            "citySourceKey": "brand-exp80-i-133-store",
            "addressSourceKey": "brand-exp80-i-133-store",
            "address": "西安市未央区罗高路168号米禾农场内"
          }
        },
        "brand-exp80-i-134": {
          "expectedName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "canonicalName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "entityRoot": "WHATEVER咖啡（苏州湖滨新天地店）",
          "aliases": [
            "WHATEVER咖啡",
            "Whatever Coffee苏州",
            "WHATEVER湖滨新天地"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "精品咖啡",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "希望客人在快节奏城市里慢下来，感受光、风、露台…",
          "philosophy": "希望客人在快节奏城市里慢下来，感受光、风、露台和一杯咖啡构成的日常。",
          "philosophyAttribution": "DNA编辑改写｜依据苏州工业园区管委会",
          "philosophySourceKeys": [
            "brand-exp80-i-134-philosophy"
          ],
          "learnMore": [
            {
              "title": "Whatever咖啡湖滨新天地店",
              "displayTitle": "WHATEVER咖啡（苏州湖滨新天地店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-134-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "complete",
            "descriptor": "苏州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "苏州当前指定空间",
            "citySourceKey": "brand-exp80-i-134-store",
            "addressSourceKey": "brand-exp80-i-134-store",
            "address": "苏州市苏州工业园区星港街158号湖滨新天地1楼106-2"
          }
        },
        "brand-exp80-i-136": {
          "expectedName": "POKAPOKA面包商店（苏州十全街店）",
          "canonicalName": "POKAPOKA面包商店（苏州十全街店）",
          "entityRoot": "POKAPOKA面包商店（苏州十全街店）",
          "aliases": [
            "POKAPOKA",
            "Poka Poka面包商店",
            "POKAPOKA十全街店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "手作烘焙",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "让面包走进生活、让生活变得温暖，坚持新鲜与健康…",
          "philosophy": "让面包走进生活、让生活变得温暖，坚持新鲜与健康，用社区小屋传递陪伴和幸福感。",
          "philosophyAttribution": "DNA编辑改写｜依据设计加",
          "philosophySourceKeys": [
            "brand-exp80-i-136-philosophy"
          ],
          "learnMore": [
            {
              "title": "Poka Poka面包商店",
              "displayTitle": "POKAPOKA面包商店（苏州十全街店）的经营与空间方法",
              "sourceKey": "brand-exp80-i-136-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "complete",
            "descriptor": "苏州指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "苏州当前指定空间",
            "citySourceKey": "brand-exp80-i-136-store",
            "addressSourceKey": "brand-exp80-i-136-store",
            "address": "苏州市姑苏区十全街459号"
          }
        },
        "brand-exp80-i-137": {
          "expectedName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "canonicalName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "entityRoot": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "aliases": [
            "MACONDO马孔多",
            "马孔多跑步",
            "MACONDO朝阳大悦城店"
          ],
          "entityType": "实体品牌空间",
          "categoryLabel": "跑步生活方式零售",
          "disposition": "complete",
          "openGaps": [],
          "researchNote": "品牌主体、当前指定空间、理念、专业深读和本地图片均已按2026-08-31口径核验。",
          "philosophyHeadline": "以“专业、科技、原创”为产品理念，把城市跑、越…",
          "philosophy": "以“专业、科技、原创”为产品理念，把城市跑、越野跑、装备体验与跑者社群组织成真实线下路径。",
          "philosophyAttribution": "DNA编辑改写｜依据新浪新闻",
          "philosophySourceKeys": [
            "brand-exp80-i-137-philosophy"
          ],
          "learnMore": [
            {
              "title": "ISENSE DESIGN｜MACONDO马孔多全国首店",
              "displayTitle": "MACONDO马孔多全国首店（北京朝阳大悦城）的经营与空间方法",
              "sourceKey": "brand-exp80-i-137-deep-read"
            }
          ],
          "store": {
            "count": null,
            "countUnknownReason": "本记录以已核验指定空间为分析单位，不将非完整网络信息升级为全品牌精确门店总数。",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "descriptor": "北京指定实体空间已核验 · 截至2026-08-31",
            "scopeCode": "verified-current-space",
            "scopeLabel": "北京当前指定空间",
            "citySourceKey": "brand-exp80-i-137-store",
            "addressSourceKey": "brand-exp80-i-137-store",
            "address": "北京市朝阳区朝阳北路101号朝阳大悦城4层"
          }
        }
      },
      "sources": {
        "brand-exp80-c-021-philosophy": {
          "brandId": "brand-exp80-c-021",
          "expectedName": "爱德面包坊",
          "subjectName": "爱德面包坊",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "爱德基金会2024年年度报告",
          "url": "https://amity.oss-cn-shanghai.aliyuncs.com/owe/2025-08-08/c918568d656d4bf2903da211b34237c3/%E7%88%B1%E5%BE%B7%E5%9F%BA%E9%87%91%E4%BC%9A2024%E5%B9%B4%E6%8A%A5-%E5%8D%B0%E5%88%B7%E5%8F%8C%E9%A1%B5-%E5%AE%9A%E7%A8%BF_%E5%B0%8F.pdf",
          "publishedAt": "2025-08-08",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "爱德基金会页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-c-021-store": {
          "brandId": "brand-exp80-c-021",
          "expectedName": "爱德面包坊",
          "subjectName": "爱德面包坊",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "拾光｜城市温度，烤进这间‘爱的’面包坊",
          "url": "https://www.xhby.net/content/s6a6aacc2e4b04c44976a799a.html",
          "publishedAt": "2026-07-30",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新华日报·交汇点新闻页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-c-021-deep-read": {
          "brandId": "brand-exp80-c-021",
          "expectedName": "爱德面包坊",
          "subjectName": "爱德面包坊",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "就业典型 | 43岁‘喜憨儿’成了面包店的‘福总’",
          "url": "https://m.thepaper.cn/baijiahao_29833354",
          "contentType": "article",
          "publishedAt": "2025-01-02",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国残疾人就创业平台，经澎湃新闻转载页面已核对经营方法与空间机制。"
        },
        "brand-exp80-c-026-philosophy": {
          "brandId": "brand-exp80-c-026",
          "expectedName": "龙凤旗袍（陕西北路旗舰店）",
          "subjectName": "龙凤旗袍（陕西北路旗舰店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "Where to find custom qipao in Shanghai",
          "url": "https://english.shanghai.gov.cn/en-ShanghaiStyle/20260521/fcc24cead50f47e3a2cf578cca1b57bf.html",
          "publishedAt": "2026-05-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "上海市人民政府英文门户，来源上海市商务委员会页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-c-026-store": {
          "brandId": "brand-exp80-c-026",
          "expectedName": "龙凤旗袍（陕西北路旗舰店）",
          "subjectName": "龙凤旗袍（陕西北路旗舰店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "Where to find custom qipao in Shanghai",
          "url": "https://english.shanghai.gov.cn/en-ShanghaiStyle/20260521/fcc24cead50f47e3a2cf578cca1b57bf.html",
          "publishedAt": "2026-05-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "上海市人民政府英文门户，来源上海市商务委员会页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-c-026-deep-read": {
          "brandId": "brand-exp80-c-026",
          "expectedName": "龙凤旗袍（陕西北路旗舰店）",
          "subjectName": "龙凤旗袍（陕西北路旗舰店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "把龙‘穿’在身上！‘新年战袍’怎么能少得了它？",
          "url": "https://www.thepaper.cn/newsDetail_forward_26348993",
          "contentType": "article",
          "publishedAt": "2024-02-12",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "青春上海，经澎湃新闻政务号承载页面已核对经营方法与空间机制。"
        },
        "brand-exp80-c-028-philosophy": {
          "brandId": "brand-exp80-c-028",
          "expectedName": "klee klee",
          "subjectName": "klee klee",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "设计经久耐用的小批量产品：klee klee",
          "url": "https://ellenmacarthurfoundation.org.cn/circular-examples/klee-klee",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "艾伦·麦克阿瑟基金会页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-c-028-store": {
          "brandId": "brand-exp80-c-028",
          "expectedName": "klee klee",
          "subjectName": "klee klee",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "安福路又卷出了新秩序",
          "url": "https://www.thepaper.cn/newsDetail_forward_30693023",
          "publishedAt": "2025-04-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "澎湃新闻·湃客页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-c-028-deep-read": {
          "brandId": "brand-exp80-c-028",
          "expectedName": "klee klee",
          "subjectName": "klee klee",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "klee klee & friends，上海 / CASE PAVILION 案亭",
          "url": "https://www.gooood.cn/klee-klee-friends-by-case-pavilion.htm",
          "contentType": "article",
          "publishedAt": "2023-07-03",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gooood 谷德设计网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-d-032-philosophy": {
          "brandId": "brand-exp80-d-032",
          "expectedName": "Fabrica X（The Mills Shop 108）",
          "subjectName": "Fabrica X（The Mills Shop 108）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "About Us",
          "url": "https://www.fabricaxhk.com/pages/about-us",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Fabrica X页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-d-032-store": {
          "brandId": "brand-exp80-d-032",
          "expectedName": "Fabrica X（The Mills Shop 108）",
          "subjectName": "Fabrica X（The Mills Shop 108）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Explore With Us: Public",
          "url": "https://www.themillsfabrica.com/explore-with-us/public/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "The Mills Fabrica页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-d-032-deep-read": {
          "brandId": "brand-exp80-d-032",
          "expectedName": "Fabrica X（The Mills Shop 108）",
          "subjectName": "Fabrica X（The Mills Shop 108）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "The Mills Fabrica Impact Report 2024/25",
          "url": "https://www.themillsfabrica.com/wp-content/uploads/2025/12/The-Mills-Fabrica-Impact-Report-2024-25.pdf",
          "contentType": "article",
          "publishedAt": "2025-12-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "The Mills Fabrica页面已核对经营方法与空间机制。"
        },
        "brand-exp80-d-035-philosophy": {
          "brandId": "brand-exp80-d-035",
          "expectedName": "Rapha Shanghai Clubhouse",
          "subjectName": "Rapha Shanghai Clubhouse",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "About Rapha",
          "url": "https://content.rapha.cc/gb/en/about",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Rapha页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-d-035-store": {
          "brandId": "brand-exp80-d-035",
          "expectedName": "Rapha Shanghai Clubhouse",
          "subjectName": "Rapha Shanghai Clubhouse",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Shanghai Clubhouse",
          "url": "https://content.rapha.cc/row/en/clubhouses/shanghai",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Rapha页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-d-035-deep-read": {
          "brandId": "brand-exp80-d-035",
          "expectedName": "Rapha Shanghai Clubhouse",
          "subjectName": "Rapha Shanghai Clubhouse",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Rapha BR Clubhouse Shanghai",
          "url": "https://seen-studios.com/allprojects/rapha-br-clubhouse-shanghai",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Seen Studios页面已核对经营方法与空间机制。"
        },
        "brand-exp80-d-037-philosophy": {
          "brandId": "brand-exp80-d-037",
          "expectedName": "ARC'TERYX Alpha Center Shanghai",
          "subjectName": "ARC'TERYX Alpha Center Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Design Centre",
          "url": "https://blog.arcteryx.com/fact-sheets/design-centre/",
          "publishedAt": "2019-12-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Arc'teryx页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-d-037-store": {
          "brandId": "brand-exp80-d-037",
          "expectedName": "ARC'TERYX Alpha Center Shanghai",
          "subjectName": "ARC'TERYX Alpha Center Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "ARC'TERYX（力宝广场店）",
          "url": "https://maps.apple.com/place?address=222%2C+Huaihai+Middle+Road+No.+Lippo+Plaza+Shopping+Centre+Floor+2F%2C+Huangpu%2C+Shanghai+China&auid=1118656882883199&coordinate=31.224095%2C121.475485&lsp=57879&name=ARC%27+TERYX+ARC%27TERYX+%28Libao+Plaza+Branch%29",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps / 高德地点数据页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-d-037-deep-read": {
          "brandId": "brand-exp80-d-037",
          "expectedName": "ARC'TERYX Alpha Center Shanghai",
          "subjectName": "ARC'TERYX Alpha Center Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "ARC'TERYX Alpha Center Shanghai",
          "url": "https://frenchdesignawards.com/winner-info.php?id=4511",
          "contentType": "article",
          "publishedAt": "2026-03-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "French Design Awards页面已核对经营方法与空间机制。"
        },
        "brand-exp80-d-041-philosophy": {
          "brandId": "brand-exp80-d-041",
          "expectedName": "Nike 跑百巷 Run Hai Lane",
          "subjectName": "Nike 跑百巷 Run Hai Lane",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "耐克跑百巷（Run Hai Lane）正式开幕",
          "url": "https://www.nikeinc.com.cn/html/page-3293.html",
          "publishedAt": "2020-01-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Nike 中国页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-d-041-store": {
          "brandId": "brand-exp80-d-041",
          "expectedName": "Nike 跑百巷 Run Hai Lane",
          "subjectName": "Nike 跑百巷 Run Hai Lane",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "Shanghai after dark: A journey from dusk to daybreak (chapter two)",
          "url": "https://english.shanghai.gov.cn/en-PlanANightOut/20260810/1ca8c5e3a81c46c195b663af6dc88b6e.html",
          "publishedAt": "2026-08-10",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Shanghai Municipal Government页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-d-041-deep-read": {
          "brandId": "brand-exp80-d-041",
          "expectedName": "Nike 跑百巷 Run Hai Lane",
          "subjectName": "Nike 跑百巷 Run Hai Lane",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "RUN HAI LANE mural by Omacke",
          "url": "https://www.behance.net/gallery/101473655/RUN-HAI-LANE-mural-by-Omacke",
          "contentType": "article",
          "publishedAt": "2020-07-28",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "ROYALCLUB Studio on Behance页面已核对经营方法与空间机制。"
        },
        "brand-exp80-d-047-philosophy": {
          "brandId": "brand-exp80-d-047",
          "expectedName": "岩时攀岩 Gate M 西岸梦中心店",
          "subjectName": "岩时攀岩 Gate M 西岸梦中心店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "岩时攀岩品牌简介",
          "url": "https://m.winshang.com/pp451077.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "赢商网页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-d-047-store": {
          "brandId": "brand-exp80-d-047",
          "expectedName": "岩时攀岩 Gate M 西岸梦中心店",
          "subjectName": "岩时攀岩 Gate M 西岸梦中心店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "岩时攀岩（Gate M西岸梦中心）",
          "url": "https://huodong.com/venue/detail/eyuS2",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "活动网场馆库页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-d-047-deep-read": {
          "brandId": "brand-exp80-d-047",
          "expectedName": "岩时攀岩 Gate M 西岸梦中心店",
          "subjectName": "岩时攀岩 Gate M 西岸梦中心店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Vol.96 一家岩馆，见证中国攀岩的一个时代",
          "url": "https://zeno.fm/podcast/yue-xia-hu-wai-pin-dao/episodes/vol-96-yi-jia-yan-guan-jian-zhong-guo-pan-yan-de-yi-ge-shi-dai/",
          "contentType": "article",
          "publishedAt": "2026-07-28",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "岳下｜户外频道页面已核对经营方法与空间机制。"
        },
        "brand-exp80-d-050-philosophy": {
          "brandId": "brand-exp80-d-050",
          "expectedName": "PANE PLAZA Shanghai",
          "subjectName": "PANE PLAZA Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "PANE PLAZA Shanghai Yongyuan Rd",
          "url": "https://paneshoes.com/pages/pane-plaza-shanghai-yongyuan-rd",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "PANE页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-d-050-store": {
          "brandId": "brand-exp80-d-050",
          "expectedName": "PANE PLAZA Shanghai",
          "subjectName": "PANE PLAZA Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "PANE THE ATTIC 正式开放",
          "url": "https://www.sina.cn/news/detail/5305803418636542.html",
          "publishedAt": "2026-05-29",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新浪新闻页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-d-050-deep-read": {
          "brandId": "brand-exp80-d-050",
          "expectedName": "PANE PLAZA Shanghai",
          "subjectName": "PANE PLAZA Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "PANE PLAZA 于上海永源路开幕",
          "url": "https://www.sohu.com/a/907716628_116152",
          "contentType": "article",
          "publishedAt": "2025-06-20",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "搜狐时尚商业转载页面已核对经营方法与空间机制。"
        },
        "brand-exp80-g-071-philosophy": {
          "brandId": "brand-exp80-g-071",
          "expectedName": "Cabana 北京三里屯旗舰店",
          "subjectName": "Cabana 北京三里屯旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "Cabana company profile",
          "url": "https://www.linkedin.com/company/homecabana",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Cabana / LinkedIn页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-g-071-store": {
          "brandId": "brand-exp80-g-071",
          "expectedName": "Cabana 北京三里屯旗舰店",
          "subjectName": "Cabana 北京三里屯旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "brand-website",
          "name": "Cabana company profile",
          "url": "https://www.linkedin.com/company/homecabana",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Cabana / LinkedIn页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-g-071-deep-read": {
          "brandId": "brand-exp80-g-071",
          "expectedName": "Cabana 北京三里屯旗舰店",
          "subjectName": "Cabana 北京三里屯旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Cabana Beijing",
          "url": "https://plusc.cc/cabana-beijing/",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "+c architects页面已核对经营方法与空间机制。"
        },
        "brand-exp80-g-072-philosophy": {
          "brandId": "brand-exp80-g-072",
          "expectedName": "ICICLE SPACE 上海合川路旗舰空间",
          "subjectName": "ICICLE SPACE 上海合川路旗舰空间",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "ICICLE SPACE",
          "url": "https://www.icicle.com.cn/en/icicle-space/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "ICICLE页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-g-072-store": {
          "brandId": "brand-exp80-g-072",
          "expectedName": "ICICLE SPACE 上海合川路旗舰空间",
          "subjectName": "ICICLE SPACE 上海合川路旗舰空间",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "ICICLE SPACE",
          "url": "https://www.icicle.com.cn/en/icicle-space/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "ICICLE页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-g-072-deep-read": {
          "brandId": "brand-exp80-g-072",
          "expectedName": "ICICLE SPACE 上海合川路旗舰空间",
          "subjectName": "ICICLE SPACE 上海合川路旗舰空间",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Shop facade in Shanghai",
          "url": "https://www.gmp.de/en/news/41/press/4907/shop-facade-in-shanghai",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gmp Architects页面已核对经营方法与空间机制。"
        },
        "brand-exp80-g-073-philosophy": {
          "brandId": "brand-exp80-g-073",
          "expectedName": "Dover Street Market Beijing 王府井店",
          "subjectName": "Dover Street Market Beijing 王府井店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Go With the Chaos: The Architects of Dover Street Market on Its Recipe for Radi…",
          "url": "https://www.vogue.com/article/go-with-the-chaos-the-architects-of-dover-street-market-on-its-recipe-for-radical-retail",
          "publishedAt": "2025-12-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Vogue页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-g-073-store": {
          "brandId": "brand-exp80-g-073",
          "expectedName": "Dover Street Market Beijing 王府井店",
          "subjectName": "Dover Street Market Beijing 王府井店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Contact",
          "url": "https://beijing.doverstreetmarket.com/pages/contact",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Dover Street Market Beijing页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-g-073-deep-read": {
          "brandId": "brand-exp80-g-073",
          "expectedName": "Dover Street Market Beijing 王府井店",
          "subjectName": "Dover Street Market Beijing 王府井店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Go With the Chaos: The Architects of Dover Street Market on Its Recipe for Radi…",
          "url": "https://www.vogue.com/article/go-with-the-chaos-the-architects-of-dover-street-market-on-its-recipe-for-radical-retail",
          "contentType": "article",
          "publishedAt": "2025-12-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Vogue页面已核对经营方法与空间机制。"
        },
        "brand-exp80-g-074-philosophy": {
          "brandId": "brand-exp80-g-074",
          "expectedName": "SHANG XIA Maison 上海之家",
          "subjectName": "SHANG XIA Maison 上海之家",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "SHANG XIA",
          "url": "https://www.shangxia.com/en",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "SHANG XIA页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-g-074-store": {
          "brandId": "brand-exp80-g-074",
          "expectedName": "SHANG XIA Maison 上海之家",
          "subjectName": "SHANG XIA Maison 上海之家",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Stores",
          "url": "https://www.shangxia.com/en/pages/store",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "SHANG XIA页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-g-074-deep-read": {
          "brandId": "brand-exp80-g-074",
          "expectedName": "SHANG XIA Maison 上海之家",
          "subjectName": "SHANG XIA Maison 上海之家",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Shang Xia's striking Shanghai flagship",
          "url": "https://www.wallpaper.com/fashion/shang-xias-striking-shanghai-flagship",
          "contentType": "article",
          "publishedAt": "2022-10-11",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Wallpaper页面已核对经营方法与空间机制。"
        },
        "brand-exp80-g-078-philosophy": {
          "brandId": "brand-exp80-g-078",
          "expectedName": "多少MoreLess 上海M50旗舰店",
          "subjectName": "多少MoreLess 上海M50旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "MoreLess by Hou Zhengguang: The relationship between mentality and form",
          "url": "https://www.chinadesigncentre.com/works/moreless-by-hou-zheng-guang-the-relationship-between-mentality-and-form.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "China Design Centre页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-g-078-store": {
          "brandId": "brand-exp80-g-078",
          "expectedName": "多少MoreLess 上海M50旗舰店",
          "subjectName": "多少MoreLess 上海M50旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "MoreLess M50 place",
          "url": "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F92683F276BA",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-g-078-deep-read": {
          "brandId": "brand-exp80-g-078",
          "expectedName": "多少MoreLess 上海M50旗舰店",
          "subjectName": "多少MoreLess 上海M50旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "More Less Store by Sx",
          "url": "https://www.gooood.cn/more-less-store-by-sx.htm",
          "contentType": "article",
          "publishedAt": "2013-06-15",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gooood页面已核对经营方法与空间机制。"
        },
        "brand-exp80-g-079-philosophy": {
          "brandId": "brand-exp80-g-079",
          "expectedName": "Melt Season 上海太原路旗舰店",
          "subjectName": "Melt Season 上海太原路旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Melt Season创始人倪丽诗：气味、空间与品牌灵魂",
          "url": "https://www.xiaoyuzhoufm.com/episode/665ef0d063c334a2fb4dc699",
          "publishedAt": "2024-06-05",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "小宇宙页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-g-079-store": {
          "brandId": "brand-exp80-g-079",
          "expectedName": "Melt Season 上海太原路旗舰店",
          "subjectName": "Melt Season 上海太原路旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "MELT SEASON place",
          "url": "https://maps.apple.com/place?address=Taiyuan+Road+and+Yongkang+Road+Intersection+Southeast+40+Meters%2C+Xuhui%2C+Shanghai+China&auid=1118573704797163&coordinate=31.209269%2C121.454304&lsp=57879&name=MELT+SEASON",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-g-079-deep-read": {
          "brandId": "brand-exp80-g-079",
          "expectedName": "Melt Season 上海太原路旗舰店",
          "subjectName": "Melt Season 上海太原路旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Melt Season Flagship at Taiyuan Road",
          "url": "https://bigsee.eu/melt-season-flagship-at-taiyuan-road-shanghai-by-mlkk-studio/",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "BIG SEE页面已核对经营方法与空间机制。"
        },
        "brand-exp80-g-080-philosophy": {
          "brandId": "brand-exp80-g-080",
          "expectedName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "subjectName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "RECLASSIFIED",
          "url": "https://shanghai.lps-china.com/zh-hans/partners/reclassified/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "LPS Shanghai页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-g-080-store": {
          "brandId": "brand-exp80-g-080",
          "expectedName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "subjectName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "RECLASSIFIED上生新所 place",
          "url": "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F9447CF15991",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-g-080-deep-read": {
          "brandId": "brand-exp80-g-080",
          "expectedName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "subjectName": "RECLASSIFIED调香室 上生·新所旗舰店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Reclassified",
          "url": "https://studio8-sh.com/work/reclassified/",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Studio8 Architects页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-081-philosophy": {
          "brandId": "brand-exp80-h-081",
          "expectedName": "黄天源观前街店",
          "subjectName": "黄天源观前街店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "黄天源：苏式糕团的守正与创新",
          "url": "https://www.ce.cn/culture/gd/202008/12/t20200812_35507434.shtml",
          "publishedAt": "2020-08-12",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国经济网页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-081-store": {
          "brandId": "brand-exp80-h-081",
          "expectedName": "黄天源观前街店",
          "subjectName": "黄天源观前街店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "苏州旅游：黄天源观前街门店",
          "url": "https://visitsz.wglj.suzhou.com.cn/news-detail.aspx?id=305",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "苏州市文化广电和旅游局页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-081-deep-read": {
          "brandId": "brand-exp80-h-081",
          "expectedName": "黄天源观前街店",
          "subjectName": "黄天源观前街店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "黄天源：苏式糕团的守正与创新",
          "url": "https://www.ce.cn/culture/gd/202008/12/t20200812_35507434.shtml",
          "contentType": "article",
          "publishedAt": "2020-08-12",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国经济网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-082-philosophy": {
          "brandId": "brand-exp80-h-082",
          "expectedName": "松鹤楼苏帮菜观前店",
          "subjectName": "松鹤楼苏帮菜观前店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "豫园股份餐饮品牌：松鹤楼",
          "url": "https://www.yuyuantm.com.cn/brand/cater.html",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "豫园股份页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-082-store": {
          "brandId": "brand-exp80-h-082",
          "expectedName": "松鹤楼苏帮菜观前店",
          "subjectName": "松鹤楼苏帮菜观前店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "松鹤楼观前店地点页与相册",
          "url": "https://hk.trip.com/restaurant/china/suzhou/detail/song-helou-11273072/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-082-deep-read": {
          "brandId": "brand-exp80-h-082",
          "expectedName": "松鹤楼苏帮菜观前店",
          "subjectName": "松鹤楼苏帮菜观前店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "苏州老字号松鹤楼历史档案",
          "url": "https://dfzb.suzhou.gov.cn/dfzb/szdq/201511/16eff57279ec489487d8583568411cab.shtml",
          "contentType": "article",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "苏州市地方志办公室页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-085-philosophy": {
          "brandId": "brand-exp80-h-085",
          "expectedName": "桂发祥十八街麻花文化馆",
          "subjectName": "桂发祥十八街麻花文化馆",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "品牌文化",
          "url": "https://www.gfx.com.cn/class/9",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "天津桂发祥十八街麻花食品股份有限公司页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-085-store": {
          "brandId": "brand-exp80-h-085",
          "expectedName": "桂发祥十八街麻花文化馆",
          "subjectName": "桂发祥十八街麻花文化馆",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "桂发祥十八街麻花文化馆",
          "url": "https://www.gfx.com.cn/class/17",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "天津桂发祥十八街麻花食品股份有限公司页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-085-deep-read": {
          "brandId": "brand-exp80-h-085",
          "expectedName": "桂发祥十八街麻花文化馆",
          "subjectName": "桂发祥十八街麻花文化馆",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "桂发祥：老字号创新与文化体验",
          "url": "https://company.cnstock.com/company/scp_gsxw/202306/5081646.htm",
          "contentType": "article",
          "publishedAt": "2023-06-01",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "上海证券报页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-086-philosophy": {
          "brandId": "brand-exp80-h-086",
          "expectedName": "耳朵眼会馆鼓楼店",
          "subjectName": "耳朵眼会馆鼓楼店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "耳朵眼：老字号传承与创新访谈",
          "url": "https://m.ccas.com.cn/site/content/205806.html",
          "publishedAt": "2021-09-29",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国烹饪协会/天津日报页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-086-store": {
          "brandId": "brand-exp80-h-086",
          "expectedName": "耳朵眼会馆鼓楼店",
          "subjectName": "耳朵眼会馆鼓楼店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "耳朵眼会馆（鼓楼店）地点页与相册",
          "url": "https://tw.trip.com/restaurant/china/tianjin/detail/erduoyan-11521346/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-086-deep-read": {
          "brandId": "brand-exp80-h-086",
          "expectedName": "耳朵眼会馆鼓楼店",
          "subjectName": "耳朵眼会馆鼓楼店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "耳朵眼：老字号传承与创新访谈",
          "url": "https://m.ccas.com.cn/site/content/205806.html",
          "contentType": "article",
          "publishedAt": "2021-09-29",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国烹饪协会/天津日报页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-089-philosophy": {
          "brandId": "brand-exp80-h-089",
          "expectedName": "陶陶居酒家第十甫路总店",
          "subjectName": "陶陶居酒家第十甫路总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "广州老字号陶陶居",
          "url": "https://sw.gz.gov.cn/ztzl/gnmy/zxlzh/content/post_7064812.html",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "广州市商务局页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-089-store": {
          "brandId": "brand-exp80-h-089",
          "expectedName": "陶陶居酒家第十甫路总店",
          "subjectName": "陶陶居酒家第十甫路总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "陶陶居酒家（第十甫路总店）地点页与相册",
          "url": "https://tw.trip.com/restaurant/china/guangzhou/detail/tao-tao-ju-restaurant-478787/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-089-deep-read": {
          "brandId": "brand-exp80-h-089",
          "expectedName": "陶陶居酒家第十甫路总店",
          "subjectName": "陶陶居酒家第十甫路总店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "陶陶居：百年茶楼的守正创新",
          "url": "https://sw.gz.gov.cn/ztzl/gnmy/zxlzh/content/post_5604028.html",
          "contentType": "article",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "广州市商务局页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-090-philosophy": {
          "brandId": "brand-exp80-h-090",
          "expectedName": "莲香楼第十甫路店",
          "subjectName": "莲香楼第十甫路店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "莲香楼老字号介绍",
          "url": "https://www.lw.gov.cn/zjlw/lwdt/szlw/content/post_9142066.html",
          "publishedAt": "2023-08-07",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "广州市荔湾区人民政府页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-090-store": {
          "brandId": "brand-exp80-h-090",
          "expectedName": "莲香楼第十甫路店",
          "subjectName": "莲香楼第十甫路店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "莲香楼（第十甫路店）地点页与相册",
          "url": "https://tw.trip.com/restaurant/china/guangzhou/detail/lian-xiang-lou-478008/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-090-deep-read": {
          "brandId": "brand-exp80-h-090",
          "expectedName": "莲香楼第十甫路店",
          "subjectName": "莲香楼第十甫路店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "百年莲香楼延续西关味道",
          "url": "https://www.stheadline.com/zh-hans/loadnext/0/3334795",
          "contentType": "article",
          "publishedAt": "2024-04-07",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "星岛头条页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-092-philosophy": {
          "brandId": "brand-exp80-h-092",
          "expectedName": "广州酒家文昌总店",
          "subjectName": "广州酒家文昌总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "广州酒家文昌总店",
          "url": "https://www.gzr.com.cn/index.php?ac=article&at=read&did=50",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "广州酒家集团页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-092-store": {
          "brandId": "brand-exp80-h-092",
          "expectedName": "广州酒家文昌总店",
          "subjectName": "广州酒家文昌总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "广州酒家文昌总店地点页与相册",
          "url": "https://tw.trip.com/restaurant/china/guangzhou/detail/guangzhou-restaurant-479108/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-092-deep-read": {
          "brandId": "brand-exp80-h-092",
          "expectedName": "广州酒家文昌总店",
          "subjectName": "广州酒家文昌总店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "广州酒家文昌总店焕新",
          "url": "https://www.ccas.com.cn/site/content/207950.html?siteid=1",
          "contentType": "article",
          "publishedAt": "2025-01-23",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国烹饪协会页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-097-philosophy": {
          "brandId": "brand-exp80-h-097",
          "expectedName": "永和鱼丸南后街店",
          "subjectName": "永和鱼丸南后街店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "商务部老字号数字博物馆：永和鱼丸",
          "url": "https://lzhbwg.mofcom.gov.cn/edi_ecms_web_front/thb/detail/d438fa7ddf7e447b8d49d18482b346e8",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "商务部页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-097-store": {
          "brandId": "brand-exp80-h-097",
          "expectedName": "永和鱼丸南后街店",
          "subjectName": "永和鱼丸南后街店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "永和鱼丸南后街店",
          "url": "https://www.fuzhoumeishi.cn/node/21579/20240412/6618e3e3352cb.shtml",
          "publishedAt": "2024-04-12",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "福州美食网/福州市商务局体系页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-097-deep-read": {
          "brandId": "brand-exp80-h-097",
          "expectedName": "永和鱼丸南后街店",
          "subjectName": "永和鱼丸南后街店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "福州永和鱼丸的老字号新生",
          "url": "https://k.sina.cn/article_7879922979_1d5ae152301901n6v0.html?from=food",
          "contentType": "article",
          "publishedAt": "2025-01-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新浪新闻页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-101-philosophy": {
          "brandId": "brand-exp80-h-101",
          "expectedName": "德华楼六渡桥店",
          "subjectName": "德华楼六渡桥店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "德华楼老字号焕新",
          "url": "https://sw.wuhan.gov.cn/xwdt/gzdt/202501/t20250121_2521146.shtml",
          "publishedAt": "2025-01-21",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "武汉市商务局页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-101-store": {
          "brandId": "brand-exp80-h-101",
          "expectedName": "德华楼六渡桥店",
          "subjectName": "德华楼六渡桥店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "德华楼（六渡桥店）地点页与相册",
          "url": "https://tw.trip.com/restaurant/china/wuhan/detail/dehualou-liuduqiao-11435542",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-101-deep-read": {
          "brandId": "brand-exp80-h-101",
          "expectedName": "德华楼六渡桥店",
          "subjectName": "德华楼六渡桥店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "德华楼创新经营观察",
          "url": "https://sw.wuhan.gov.cn/xwdt/gzdt/202306/t20230627_2222010.shtml",
          "contentType": "article",
          "publishedAt": "2023-06-27",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "武汉市商务局页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-102-philosophy": {
          "brandId": "brand-exp80-h-102",
          "expectedName": "火宫殿坡子街总店",
          "subjectName": "火宫殿坡子街总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "火宫殿传承与经营访谈",
          "url": "https://tw.hutb.edu.cn/zxdt/content_76129",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "湖南工商大学页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-102-store": {
          "brandId": "brand-exp80-h-102",
          "expectedName": "火宫殿坡子街总店",
          "subjectName": "火宫殿坡子街总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "火宫殿坡子街空间修缮期间持续开放",
          "url": "https://www.hunan.gov.cn/hnszf/hnyw/jdt2/202503/t20250313_33611029.html",
          "publishedAt": "2025-03-13",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "湖南省人民政府页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-102-deep-read": {
          "brandId": "brand-exp80-h-102",
          "expectedName": "火宫殿坡子街总店",
          "subjectName": "火宫殿坡子街总店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "火宫殿传承与经营访谈",
          "url": "https://tw.hutb.edu.cn/zxdt/content_76129",
          "contentType": "article",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "湖南工商大学页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-105-philosophy": {
          "brandId": "brand-exp80-h-105",
          "expectedName": "钟水饺人民公园总店",
          "subjectName": "钟水饺人民公园总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "商务部老字号数字博物馆：钟水饺",
          "url": "https://lzhbwg.mofcom.gov.cn/edi_ecms_web_front/thb/detail/8cf137a439d24c3a8ed22112e6243665",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "商务部页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-105-store": {
          "brandId": "brand-exp80-h-105",
          "expectedName": "钟水饺人民公园总店",
          "subjectName": "钟水饺人民公园总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "钟水饺人民公园总店地点页与相册",
          "url": "https://sg.trip.com/restaurant/china/chengdu/detail/zhong-dumplings-11384060/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-105-deep-read": {
          "brandId": "brand-exp80-h-105",
          "expectedName": "钟水饺人民公园总店",
          "subjectName": "钟水饺人民公园总店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "成都传统小吃传承人报道",
          "url": "https://duzhebao.cn/uploads/pdf/20250427/174573233848.pdf",
          "contentType": "article",
          "publishedAt": "2025-04-27",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "读者报页面已核对经营方法与空间机制。"
        },
        "brand-exp80-h-106-philosophy": {
          "brandId": "brand-exp80-h-106",
          "expectedName": "陈麻婆豆腐骡马市店",
          "subjectName": "陈麻婆豆腐骡马市店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "商务部老字号数字博物馆：陈麻婆豆腐",
          "url": "https://lzhbwg.mofcom.gov.cn/edi_ecms_web_front/thb/detail/f7ab3a6e7ea0426d8fd104fc7c93df79",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "商务部页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-h-106-store": {
          "brandId": "brand-exp80-h-106",
          "expectedName": "陈麻婆豆腐骡马市店",
          "subjectName": "陈麻婆豆腐骡马市店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "陈麻婆豆腐（骡马市店）地点页与相册",
          "url": "https://hk.trip.com/restaurant/china/chengdu/detail/chen-mapo-tofu-luomashi-11383200/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-h-106-deep-read": {
          "brandId": "brand-exp80-h-106",
          "expectedName": "陈麻婆豆腐骡马市店",
          "subjectName": "陈麻婆豆腐骡马市店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "一盘麻婆豆腐里的成都味道",
          "url": "https://www.cdrb.com.cn/epaper/cdrbpc/202302/13/f427baa0-ebb2-4e0f-a42d-d81b893ab2d9.pdf",
          "contentType": "article",
          "publishedAt": "2023-02-13",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "成都日报页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-011-philosophy": {
          "brandId": "brand-expansion-20260830-011",
          "expectedName": "胡庆余堂国药号（大井巷95号）",
          "subjectName": "胡庆余堂国药号（大井巷95号）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "企业文化",
          "url": "https://hqyt.net/index.php/culture",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "胡庆余堂官方网站页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-011-store": {
          "brandId": "brand-expansion-20260830-011",
          "expectedName": "胡庆余堂国药号（大井巷95号）",
          "subjectName": "胡庆余堂国药号（大井巷95号）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "胡庆余堂国药号（地图地点页）",
          "url": "https://ditu.amap.com/place/B023B1FJ8J",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "高德地图页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-011-deep-read": {
          "brandId": "brand-expansion-20260830-011",
          "expectedName": "胡庆余堂国药号（大井巷95号）",
          "subjectName": "胡庆余堂国药号（大井巷95号）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "诚心有天知",
          "url": "https://zjrb.zjol.com.cn/images/2024-07/05/zjrb2024070500012v01n.pdf",
          "contentType": "article",
          "publishedAt": "2024-07-05",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "浙江日报页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-012-philosophy": {
          "brandId": "brand-expansion-20260830-012",
          "expectedName": "方回春堂河坊街馆",
          "subjectName": "方回春堂河坊街馆",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "方回春堂官方网站首页",
          "url": "https://www.fhct.com/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "方回春堂页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-012-store": {
          "brandId": "brand-expansion-20260830-012",
          "expectedName": "方回春堂河坊街馆",
          "subjectName": "方回春堂河坊街馆",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "网点分布",
          "url": "https://www.fhct.com/wdfb.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "方回春堂页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-012-deep-read": {
          "brandId": "brand-expansion-20260830-012",
          "expectedName": "方回春堂河坊街馆",
          "subjectName": "方回春堂河坊街馆",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "方回春堂传统膏方文化专题",
          "url": "https://wgly.hangzhou.gov.cn/art/2023/11/14/art_1229734040_58950495.html",
          "contentType": "article",
          "publishedAt": "2023-11-14",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "杭州市文化广电旅游局页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-013-philosophy": {
          "brandId": "brand-expansion-20260830-013",
          "expectedName": "王星记旗舰店（河坊街店）",
          "subjectName": "王星记旗舰店（河坊街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "关于王星记",
          "url": "https://www.wangxingji.com/about.aspx",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "王星记官方网站页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-013-store": {
          "brandId": "brand-expansion-20260830-013",
          "expectedName": "王星记旗舰店（河坊街店）",
          "subjectName": "王星记旗舰店（河坊街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "王星记旗舰店（河坊街店）",
          "url": "https://maps.apple.com/place?auid=1118830980298529&lsp=57879",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-013-deep-read": {
          "brandId": "brand-expansion-20260830-013",
          "expectedName": "王星记旗舰店（河坊街店）",
          "subjectName": "王星记旗舰店（河坊街店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "一把扇子的非遗新生",
          "url": "https://www.hzxcw.gov.cn/content_23331.html",
          "contentType": "article",
          "publishedAt": "2025-02-19",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "杭州市委宣传部·杭州宣传网页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-014-philosophy": {
          "brandId": "brand-expansion-20260830-014",
          "expectedName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "subjectName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "万事利丝绸文化品牌体验地全年开放",
          "url": "https://www.wensli.com/News/Detail?id=14278",
          "publishedAt": "2026-05-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "万事利官方网站页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-014-store": {
          "brandId": "brand-expansion-20260830-014",
          "expectedName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "subjectName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "brand-website",
          "name": "万事利丝绸文化品牌体验地全年开放",
          "url": "https://www.wensli.com/News/Detail?id=14278",
          "publishedAt": "2026-05-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "万事利官方网站页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-014-deep-read": {
          "brandId": "brand-expansion-20260830-014",
          "expectedName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "subjectName": "万事利丝绸文化品牌体验地（万事利时尚艺术中心）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "万事利时尚艺术中心",
          "url": "https://www.mtarch.cn/Project/ProjectDetail?id=115",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "木桃盒子建筑设计页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-015-philosophy": {
          "brandId": "brand-expansion-20260830-015",
          "expectedName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "subjectName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "今日拱墅：都锦生专题",
          "url": "https://gsb.qybk.cn/resfile/2025-02-21/02/jrgs-20250221-002.pdf",
          "publishedAt": "2025-02-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "今日拱墅页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-015-store": {
          "brandId": "brand-expansion-20260830-015",
          "expectedName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "subjectName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "走进都锦生织锦博物馆",
          "url": "https://smlt.zjtie.edu.cn/2025/1230/c651a130244/page.htm",
          "publishedAt": "2025-12-26",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "浙江旅游职业学院页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-015-deep-read": {
          "brandId": "brand-expansion-20260830-015",
          "expectedName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "subjectName": "杭州都锦生织锦博物馆（凤起路519号，含产品展销厅）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "都锦生织锦博物馆项目",
          "url": "https://www.azut.cn/product/showproduct.php?id=284",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "AZUT建筑事务所页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-018-philosophy": {
          "brandId": "brand-expansion-20260830-018",
          "expectedName": "内联升大栅栏总店",
          "subjectName": "内联升大栅栏总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "内联升",
          "url": "https://s.visitbeijing.com.cn/gift/39",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "北京市文化和旅游局·Visit Beijing页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-018-store": {
          "brandId": "brand-expansion-20260830-018",
          "expectedName": "内联升大栅栏总店",
          "subjectName": "内联升大栅栏总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "走访内联升大栅栏总店",
          "url": "https://www.bjxch.gov.cn/xcdt/xxxq/pnidpv975759.html",
          "publishedAt": "2025-02-28",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "北京市西城区人民政府页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-018-deep-read": {
          "brandId": "brand-expansion-20260830-018",
          "expectedName": "内联升大栅栏总店",
          "subjectName": "内联升大栅栏总店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "百年内联升的守正与创新",
          "url": "https://www.news.cn/20240727/968472fa9c624214a19175106d75e16c/c.html",
          "contentType": "article",
          "publishedAt": "2024-07-27",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新华社页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-019-philosophy": {
          "brandId": "brand-expansion-20260830-019",
          "expectedName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "subjectName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "知嘛健康零号店",
          "url": "https://www.trthealth.com/healthinfo_1218.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "北京同仁堂健康药业官方网站页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-019-store": {
          "brandId": "brand-expansion-20260830-019",
          "expectedName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "subjectName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "同仁堂知嘛健康零号店",
          "url": "https://www.bjwmb.gov.cn/sjjd/10043467.html",
          "publishedAt": "2023-09-25",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "首都文明网页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-019-deep-read": {
          "brandId": "brand-expansion-20260830-019",
          "expectedName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "subjectName": "同仁堂知嘛健康零号店（大兴思邈路39号）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "知嘛健康零号店设计访谈",
          "url": "https://news.dichan.sina.com.cn/Designx/d4284.html",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新浪地产·DesignX页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-020-philosophy": {
          "brandId": "brand-expansion-20260830-020",
          "expectedName": "谢馥春馥园（东关街243号）",
          "subjectName": "谢馥春馥园（东关街243号）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "关于谢馥春",
          "url": "https://www.xiefuchun.com/aboutus.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "谢馥春官方网站页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-020-store": {
          "brandId": "brand-expansion-20260830-020",
          "expectedName": "谢馥春馥园（东关街243号）",
          "subjectName": "谢馥春馥园（东关街243号）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "谢馥春馥园旅游地点页",
          "url": "https://you.ctrip.com/sight/yangzhou12/116117.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "携程旅行页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-020-deep-read": {
          "brandId": "brand-expansion-20260830-020",
          "expectedName": "谢馥春馥园（东关街243号）",
          "subjectName": "谢馥春馥园（东关街243号）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "老字号谢馥春的非遗焕新",
          "url": "https://www.jsxc.gov.cn/whwy/whcc/202601/t20260116_89654.shtml",
          "contentType": "article",
          "publishedAt": "2026-01-16",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "江苏宣传网页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-051-philosophy": {
          "brandId": "brand-expansion-20260830-051",
          "expectedName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "subjectName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "关于摩登天空",
          "url": "https://www.modernsky.com/home/aboutus",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "摩登天空页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-051-store": {
          "brandId": "brand-expansion-20260830-051",
          "expectedName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "subjectName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "Modern Sky Lab 上海（地图地点页）",
          "url": "https://www.amap.com/place/B0FFHL47AW",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "高德地图页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-051-deep-read": {
          "brandId": "brand-expansion-20260830-051",
          "expectedName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "subjectName": "Modern Sky Lab 上海（瑞虹天地月亮湾店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "It's live: your guide to Shanghai's best gig venues",
          "url": "https://www.scmp.com/culture/music/article/2098226/its-live-your-guide-shanghais-best-gig-venues",
          "contentType": "article",
          "publishedAt": "2017-06-14",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "South China Morning Post页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-052-philosophy": {
          "brandId": "brand-expansion-20260830-052",
          "expectedName": "DDC 黄昏黎明俱乐部（神路街店）",
          "subjectName": "DDC 黄昏黎明俱乐部（神路街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "不止音乐：DDC创始人69访谈",
          "url": "https://www.xiaoyuzhoufm.com/episode/62790299bf62ac2b25c16c01",
          "publishedAt": "2022-05-09",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "小宇宙页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-052-store": {
          "brandId": "brand-expansion-20260830-052",
          "expectedName": "DDC 黄昏黎明俱乐部（神路街店）",
          "subjectName": "DDC 黄昏黎明俱乐部（神路街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "DDC黄昏黎明俱乐部场馆页",
          "url": "https://goupiaotong.cn/mobile/Theater/1040.shtml",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "购票通页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-052-deep-read": {
          "brandId": "brand-expansion-20260830-052",
          "expectedName": "DDC 黄昏黎明俱乐部（神路街店）",
          "subjectName": "DDC 黄昏黎明俱乐部（神路街店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Beijing nightlife lives on at DDC",
          "url": "https://www.thatsmags.com/beijing/post/36443/69-not-out-legendary-beijing-nightlife-lives-on",
          "contentType": "article",
          "publishedAt": "2023-09-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "That's Beijing页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-053-philosophy": {
          "brandId": "brand-expansion-20260830-053",
          "expectedName": "Blue Note Beijing（前门店）",
          "subjectName": "Blue Note Beijing（前门店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Blue Note Beijing",
          "url": "https://www.visitbeijing.com.cn/article/47QoCpqIUgF",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "北京市文化和旅游局旅游门户页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-053-store": {
          "brandId": "brand-expansion-20260830-053",
          "expectedName": "Blue Note Beijing（前门店）",
          "subjectName": "Blue Note Beijing（前门店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Blue Note Beijing 场馆页",
          "url": "https://www.showstart.com/venue/193127",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "秀动页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-053-deep-read": {
          "brandId": "brand-expansion-20260830-053",
          "expectedName": "Blue Note Beijing（前门店）",
          "subjectName": "Blue Note Beijing（前门店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Blue Note Beijing Jazz Club by Chiasmus Partners",
          "url": "https://www.gooood.cn/blue-note-beijing-jazz-club-by-chiasmus-partners.htm",
          "contentType": "article",
          "publishedAt": "2018-06-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gooood 谷德设计网页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-058-philosophy": {
          "brandId": "brand-expansion-20260830-058",
          "expectedName": "Heim Shanghai（长乐路 Green Station 店）",
          "subjectName": "Heim Shanghai（长乐路 Green Station 店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Heim brings a new electronic music home to Shanghai",
          "url": "https://mixmag.asia/read/heim-shanghai-new-electronic-club-local",
          "publishedAt": "2021-06-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Mixmag Asia页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-058-store": {
          "brandId": "brand-expansion-20260830-058",
          "expectedName": "Heim Shanghai（长乐路 Green Station 店）",
          "subjectName": "Heim Shanghai（长乐路 Green Station 店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Heim Shanghai event at Green Station",
          "url": "https://ra.co/events/2406807",
          "publishedAt": "2026-04-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Resident Advisor页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-058-deep-read": {
          "brandId": "brand-expansion-20260830-058",
          "expectedName": "Heim Shanghai（长乐路 Green Station 店）",
          "subjectName": "Heim Shanghai（长乐路 Green Station 店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Heim brings a new electronic music home to Shanghai",
          "url": "https://mixmag.asia/read/heim-shanghai-new-electronic-club-local",
          "contentType": "article",
          "publishedAt": "2021-06-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Mixmag Asia页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-069-philosophy": {
          "brandId": "brand-expansion-20260830-069",
          "expectedName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "subjectName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Jazz at Lincoln Center Shanghai",
          "url": "https://jazz.org/watch-listen-discover/shanghai/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Jazz at Lincoln Center页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-069-store": {
          "brandId": "brand-expansion-20260830-069",
          "expectedName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "subjectName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Jazz at Lincoln Center Shanghai",
          "url": "https://jazz.org/watch-listen-discover/shanghai/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Jazz at Lincoln Center页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-069-deep-read": {
          "brandId": "brand-expansion-20260830-069",
          "expectedName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "subjectName": "Jazz at Lincoln Center Shanghai（外滩·中央店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "外滩爵士夜：都市人的精神SPA",
          "url": "https://www.news.cn/ent/20250221/88717f43dfda4961806d4595a88b7f29/c.html",
          "contentType": "article",
          "publishedAt": "2025-02-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新华网/解放日报页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-070-philosophy": {
          "brandId": "brand-expansion-20260830-070",
          "expectedName": "Wigwam Shanghai（C·PARK店）",
          "subjectName": "Wigwam Shanghai（C·PARK店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "wigwam pres. Stefhanja",
          "url": "https://ra.co/events/2373391",
          "publishedAt": "2026-02-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Resident Advisor页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-070-store": {
          "brandId": "brand-expansion-20260830-070",
          "expectedName": "Wigwam Shanghai（C·PARK店）",
          "subjectName": "Wigwam Shanghai（C·PARK店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "The Shanghai Clubbing Guide: August 2026",
          "url": "https://www.smartshanghai.com/articles/nightlife/the-shanghai-clubbing-guide-august-2026",
          "publishedAt": "2026-08-01",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "SmartShanghai页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-070-deep-read": {
          "brandId": "brand-expansion-20260830-070",
          "expectedName": "Wigwam Shanghai（C·PARK店）",
          "subjectName": "Wigwam Shanghai（C·PARK店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "据说在上海C·PARK，你的衣服会替你选择club？",
          "url": "https://www.10100.com/article/143217811",
          "contentType": "article",
          "publishedAt": "2026-05-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "大数跨境页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-001-philosophy": {
          "brandId": "brand-expansion-20260830-culture-001",
          "expectedName": "先锋书店（五台山店）",
          "subjectName": "先锋书店（五台山店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "“先锋书店”20年坚守与突围",
          "url": "https://www.xinhuanet.com/zgjx/2016-08/12/c_135588839.htm",
          "publishedAt": "2016-08-12",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新华网 / 中国新闻出版广电报页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-001-store": {
          "brandId": "brand-expansion-20260830-culture-001",
          "expectedName": "先锋书店（五台山店）",
          "subjectName": "先锋书店（五台山店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "brand-website",
          "name": "#重要通知# 先锋书店五台山店内部装修升级调整",
          "url": "https://www.sina.cn/news/detail/5249131643938496.html",
          "publishedAt": "2025-12-29",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "先锋书店官方微博（新浪新闻镜像）页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-001-deep-read": {
          "brandId": "brand-expansion-20260830-culture-001",
          "expectedName": "先锋书店（五台山店）",
          "subjectName": "先锋书店（五台山店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "书店没死 独立书店的个性化之路——先锋书店：让“世界列车”在此停留",
          "url": "https://www.yicai.com/news/4610071.html",
          "contentType": "article",
          "publishedAt": "2015-05-22",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "第一财经页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-002-philosophy": {
          "brandId": "brand-expansion-20260830-culture-002",
          "expectedName": "旧天堂书店（Old Heaven Books）",
          "subjectName": "旧天堂书店（Old Heaven Books）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "在旧天堂书店，邂逅好书、音乐与有趣的灵魂",
          "url": "https://www.sznews.com/news/content/mb/2021-09/13/content_24566297.htm",
          "publishedAt": "2021-09-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "深圳新闻网 / 深圳艺文惠页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-002-store": {
          "brandId": "brand-expansion-20260830-culture-002",
          "expectedName": "旧天堂书店（Old Heaven Books）",
          "subjectName": "旧天堂书店（Old Heaven Books）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "brand-website",
          "name": "演出｜静音 马木尔—尼龙弦吉他人声",
          "url": "https://www.weibo.com/2002216977/Pxfot7xiy?type=comment",
          "publishedAt": "2025-06-19",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "旧天堂书店官方微博页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-002-deep-read": {
          "brandId": "brand-expansion-20260830-culture-002",
          "expectedName": "旧天堂书店（Old Heaven Books）",
          "subjectName": "旧天堂书店（Old Heaven Books）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "在旧天堂书店，邂逅好书、音乐与有趣的灵魂",
          "url": "https://www.sznews.com/news/content/mb/2021-09/13/content_24566297.htm",
          "contentType": "article",
          "publishedAt": "2021-09-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "深圳新闻网 / 深圳艺文惠页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-003-philosophy": {
          "brandId": "brand-expansion-20260830-culture-003",
          "expectedName": "1200BOOKSHOP体育东总店",
          "subjectName": "1200BOOKSHOP体育东总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "一个徒步者兼书店老板的故事",
          "url": "https://www.hkcd.com/content/2014-12/22/content_896846.html",
          "publishedAt": "2014-12-22",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "香港商报（来源：南方周末知道）页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-003-store": {
          "brandId": "brand-expansion-20260830-culture-003",
          "expectedName": "1200BOOKSHOP体育东总店",
          "subjectName": "1200BOOKSHOP体育东总店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "24小时营业！天河这里被评为「全球最酷书店」",
          "url": "https://m.sohu.com/a/1035152770_121106875/",
          "publishedAt": "2026-06-11",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "广州天河发布（搜狐政务转载）页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-003-deep-read": {
          "brandId": "brand-expansion-20260830-culture-003",
          "expectedName": "1200BOOKSHOP体育东总店",
          "subjectName": "1200BOOKSHOP体育东总店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "一个徒步者兼书店老板的故事",
          "url": "https://www.hkcd.com/content/2014-12/22/content_896846.html",
          "contentType": "article",
          "publishedAt": "2014-12-22",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "香港商报（来源：南方周末知道）页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-004-philosophy": {
          "brandId": "brand-expansion-20260830-culture-004",
          "expectedName": "大隐书局（创智天地店）",
          "subjectName": "大隐书局（创智天地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "这家书店正式‘回归’！既能阅读书刊，还能玩转潮流！",
          "url": "https://sh.people.com.cn/n2/2021/0927/c134768-34933402.html",
          "publishedAt": "2021-09-27",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "人民网-上海频道页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-004-store": {
          "brandId": "brand-expansion-20260830-culture-004",
          "expectedName": "大隐书局（创智天地店）",
          "subjectName": "大隐书局（创智天地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "敬告读者｜大隐书局各门店2026年春节营业时间",
          "url": "https://m.sohu.com/a/985034190_121124729/",
          "publishedAt": "2026-02-08",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "上海大隐书局有限公司（搜狐账号转载）页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-004-deep-read": {
          "brandId": "brand-expansion-20260830-culture-004",
          "expectedName": "大隐书局（创智天地店）",
          "subjectName": "大隐书局（创智天地店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "‘大隐’隐于市，上海创智天地点亮城市阅读之光",
          "url": "https://www.thape.com/news/484",
          "contentType": "article",
          "publishedAt": "2019-05-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "天华建筑设计公司页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-005-philosophy": {
          "brandId": "brand-expansion-20260830-culture-005",
          "expectedName": "建投书局·浦江店",
          "subjectName": "建投书局·浦江店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "文化空间运营",
          "url": "https://www.jicbookstore.cn/page531",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "建投书店投资有限公司页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-005-store": {
          "brandId": "brand-expansion-20260830-culture-005",
          "expectedName": "建投书局·浦江店",
          "subjectName": "建投书局·浦江店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "文化空间运营",
          "url": "https://www.jicbookstore.cn/page531",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "建投书店投资有限公司页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-005-deep-read": {
          "brandId": "brand-expansion-20260830-culture-005",
          "expectedName": "建投书局·浦江店",
          "subjectName": "建投书局·浦江店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Where stylish design meets literary substance",
          "url": "https://www.shine.cn/feature/lifestyle/1706160403/",
          "contentType": "article",
          "publishedAt": "2017-06-16",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "SHINE / Shanghai Daily页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-006-philosophy": {
          "brandId": "brand-expansion-20260830-culture-006",
          "expectedName": "万圣书园·优盛阅读空间",
          "subjectName": "万圣书园·优盛阅读空间",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "万圣书园创办人刘苏里访谈稿（近完整版）",
          "url": "https://www.sohu.com/a/546739374_121124722",
          "publishedAt": "2022-05-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "书店还在 / 搜狐转载页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-006-store": {
          "brandId": "brand-expansion-20260830-culture-006",
          "expectedName": "万圣书园·优盛阅读空间",
          "subjectName": "万圣书园·优盛阅读空间",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "万圣书园重张 读者重回家园",
          "url": "https://www.beijing.gov.cn/renwen/cshd/202401/t20240105_3526544.html",
          "publishedAt": "2024-01-05",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "北京市人民政府门户网站（来源：北京日报）页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-006-deep-read": {
          "brandId": "brand-expansion-20260830-culture-006",
          "expectedName": "万圣书园·优盛阅读空间",
          "subjectName": "万圣书园·优盛阅读空间",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "万圣书园创办人刘苏里访谈稿（近完整版）",
          "url": "https://www.sohu.com/a/546739374_121124722",
          "contentType": "article",
          "publishedAt": "2022-05-13",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "书店还在 / 搜狐转载页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-007-philosophy": {
          "brandId": "brand-expansion-20260830-culture-007",
          "expectedName": "模范书局·诗空间（中华圣公会教堂店）",
          "subjectName": "模范书局·诗空间（中华圣公会教堂店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "从《上海上》到《局中局》 模范书局的线条艺术",
          "url": "https://www.news.cn/book/20240908/33313cdc619145ea8c835ef2148943fd/c.html",
          "publishedAt": "2024-09-08",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新华网页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-007-store": {
          "brandId": "brand-expansion-20260830-culture-007",
          "expectedName": "模范书局·诗空间（中华圣公会教堂店）",
          "subjectName": "模范书局·诗空间（中华圣公会教堂店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "西城区模范书局诗空间",
          "url": "https://www.bjwmb.gov.cn/mljxwdj/10064735.html",
          "publishedAt": "2024-05-08",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "首都精神文明建设委员会办公室页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-007-deep-read": {
          "brandId": "brand-expansion-20260830-culture-007",
          "expectedName": "模范书局·诗空间（中华圣公会教堂店）",
          "subjectName": "模范书局·诗空间（中华圣公会教堂店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "从《上海上》到《局中局》 模范书局的线条艺术",
          "url": "https://www.news.cn/book/20240908/33313cdc619145ea8c835ef2148943fd/c.html",
          "contentType": "article",
          "publishedAt": "2024-09-08",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新华网页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-culture-009-philosophy": {
          "brandId": "brand-expansion-20260830-culture-009",
          "expectedName": "kubrick（油麻地店）",
          "subjectName": "kubrick（油麻地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "kubrick Bookshop",
          "url": "https://bookshop.org/shop/kubrick",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "kubrick官方Bookshop.org店铺页页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-culture-009-store": {
          "brandId": "brand-expansion-20260830-culture-009",
          "expectedName": "kubrick（油麻地店）",
          "subjectName": "kubrick（油麻地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "brand-website",
          "name": "kubrick 香港店地址及联络方法",
          "url": "https://kubrick.com.hk/hk-shops-and-contacts",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "kubrick官网页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-culture-009-deep-read": {
          "brandId": "brand-expansion-20260830-culture-009",
          "expectedName": "kubrick（油麻地店）",
          "subjectName": "kubrick（油麻地店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "香港Kubrick书店——杂揉影像、书本与咖啡香的空间形变",
          "url": "https://takaobooks.tw/html/magazine_info?me_guid=e8513cbdb26c",
          "contentType": "article",
          "publishedAt": "2017-08-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "三余书店页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-dining-bars-002-philosophy": {
          "brandId": "brand-expansion-20260830-dining-bars-002",
          "expectedName": "Obscura by 唐香",
          "subjectName": "Obscura by 唐香",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "新中餐‘鼻祖’ Obscura 换主厨了？！97 年新主厨来头也不小……",
          "url": "https://m.mingchu.co/index/newsview_iframe.html?fr=&id=8855&lang_id=&sharefrom=",
          "publishedAt": "2025-05-06",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "名厨MINGCHU页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-dining-bars-002-store": {
          "brandId": "brand-expansion-20260830-dining-bars-002",
          "expectedName": "Obscura by 唐香",
          "subjectName": "Obscura by 唐香",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Obscura - Restaurant Reviews, Menu & Contact",
          "url": "https://www.trip.com/restaurant/china/shanghai/detail/obscura-108358132/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-dining-bars-002-deep-read": {
          "brandId": "brand-expansion-20260830-dining-bars-002",
          "expectedName": "Obscura by 唐香",
          "subjectName": "Obscura by 唐香",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "新中餐‘鼻祖’ Obscura 换主厨了？！97 年新主厨来头也不小……",
          "url": "https://m.mingchu.co/index/newsview_iframe.html?fr=&id=8855&lang_id=&sharefrom=",
          "contentType": "article",
          "publishedAt": "2025-05-06",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "名厨MINGCHU页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-dining-bars-004-philosophy": {
          "brandId": "brand-expansion-20260830-dining-bars-004",
          "expectedName": "Lamdre",
          "subjectName": "Lamdre",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Lamdre | Asia's 50 Best Restaurants 2026",
          "url": "https://www.theworlds50best.com/restaurants/best-in-asia/the-list/lamdre.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Asia's 50 Best Restaurants页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-dining-bars-004-store": {
          "brandId": "brand-expansion-20260830-dining-bars-004",
          "expectedName": "Lamdre",
          "subjectName": "Lamdre",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Lamdre | Asia's 50 Best Restaurants 2026",
          "url": "https://www.theworlds50best.com/restaurants/best-in-asia/the-list/lamdre.html",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Asia's 50 Best Restaurants页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-dining-bars-004-deep-read": {
          "brandId": "brand-expansion-20260830-dining-bars-004",
          "expectedName": "Lamdre",
          "subjectName": "Lamdre",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Lamdre | Asia's 50 Best Restaurants 2026",
          "url": "https://www.theworlds50best.com/restaurants/best-in-asia/the-list/lamdre.html",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Asia's 50 Best Restaurants页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-dining-bars-005-philosophy": {
          "brandId": "brand-expansion-20260830-dining-bars-005",
          "expectedName": "YAYA's Pasta Bar",
          "subjectName": "YAYA's Pasta Bar",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Eat",
          "url": "https://www.yayaspasta.com/eat",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "YAYA's Pasta Bar页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-dining-bars-005-store": {
          "brandId": "brand-expansion-20260830-dining-bars-005",
          "expectedName": "YAYA's Pasta Bar",
          "subjectName": "YAYA's Pasta Bar",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Eat",
          "url": "https://www.yayaspasta.com/eat",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "YAYA's Pasta Bar页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-dining-bars-005-deep-read": {
          "brandId": "brand-expansion-20260830-dining-bars-005",
          "expectedName": "YAYA's Pasta Bar",
          "subjectName": "YAYA's Pasta Bar",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Yaya's",
          "url": "https://krisworld.singaporeair.com/krisworlddigital/perks/silverkris/yayas.html",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "SilverKris / Singapore Airlines页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-dining-bars-011-philosophy": {
          "brandId": "brand-expansion-20260830-dining-bars-011",
          "expectedName": "Hope & Sesame Guangzhou · 庙前冰室",
          "subjectName": "Hope & Sesame Guangzhou · 庙前冰室",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Hope & Sesame Guangzhou",
          "url": "https://hopeandsesame.cn/home/hope-sesame-guangzhou/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hope & Sesame / Hope Group页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-dining-bars-011-store": {
          "brandId": "brand-expansion-20260830-dining-bars-011",
          "expectedName": "Hope & Sesame Guangzhou · 庙前冰室",
          "subjectName": "Hope & Sesame Guangzhou · 庙前冰室",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Hope & Sesame Guangzhou",
          "url": "https://hopeandsesame.cn/home/hope-sesame-guangzhou/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hope & Sesame / Hope Group页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-dining-bars-011-deep-read": {
          "brandId": "brand-expansion-20260830-dining-bars-011",
          "expectedName": "Hope & Sesame Guangzhou · 庙前冰室",
          "subjectName": "Hope & Sesame Guangzhou · 庙前冰室",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Hope & Sesame | Asia's 50 Best Bars 2026 | Ranked No. 1",
          "url": "https://www.theworlds50best.com/bars/best-in-asia/the-list/hope-and-sesame.html",
          "contentType": "article",
          "publishedAt": "2026-07-28",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Asia's 50 Best Bars页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-dining-bars-012-philosophy": {
          "brandId": "brand-expansion-20260830-dining-bars-012",
          "expectedName": "悠航SLOWBOAT·三里屯酿酒坊",
          "subjectName": "悠航SLOWBOAT·三里屯酿酒坊",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "悠航SLOWBOAT",
          "url": "https://slowboatbrewery.com/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Slow Boat Brewery页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-dining-bars-012-store": {
          "brandId": "brand-expansion-20260830-dining-bars-012",
          "expectedName": "悠航SLOWBOAT·三里屯酿酒坊",
          "subjectName": "悠航SLOWBOAT·三里屯酿酒坊",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "悠航SLOWBOAT",
          "url": "https://slowboatbrewery.com/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Slow Boat Brewery页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-dining-bars-012-deep-read": {
          "brandId": "brand-expansion-20260830-dining-bars-012",
          "expectedName": "悠航SLOWBOAT·三里屯酿酒坊",
          "subjectName": "悠航SLOWBOAT·三里屯酿酒坊",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Slow Boat Sanlitun",
          "url": "https://studiovapore.com/slowboatsanlitun/",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Studio Vapore页面已核对经营方法与空间机制。"
        },
        "brand-expansion-20260830-dining-bars-013-philosophy": {
          "brandId": "brand-expansion-20260830-dining-bars-013",
          "expectedName": "京A精酿餐吧·798店",
          "subjectName": "京A精酿餐吧·798店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "About",
          "url": "https://jingabrewing.com/about/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Jing-A Brewing页面已核对品牌身份与理念归因。"
        },
        "brand-expansion-20260830-dining-bars-013-store": {
          "brandId": "brand-expansion-20260830-dining-bars-013",
          "expectedName": "京A精酿餐吧·798店",
          "subjectName": "京A精酿餐吧·798店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "798",
          "url": "https://jingabrewing.com/beer-temples/798/",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Jing-A Brewing页面已核对当前空间、城市与地址。"
        },
        "brand-expansion-20260830-dining-bars-013-deep-read": {
          "brandId": "brand-expansion-20260830-dining-bars-013",
          "expectedName": "京A精酿餐吧·798店",
          "subjectName": "京A精酿餐吧·798店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Jing A 798",
          "url": "https://naowork.com/project/jing-798",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "NAO页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-107-philosophy": {
          "brandId": "brand-exp80-i-107",
          "expectedName": "樂班Le’ban农场餐厅（米禾农场店）",
          "subjectName": "樂班Le’ban农场餐厅（米禾农场店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "MOS木石设计｜乐班农场餐厅",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/07/10/196801",
          "publishedAt": "2025-07-10",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-107-store": {
          "brandId": "brand-exp80-i-107",
          "expectedName": "樂班Le’ban农场餐厅（米禾农场店）",
          "subjectName": "樂班Le’ban农场餐厅（米禾农场店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "Le’ban农场餐厅地点页",
          "url": "https://maps.apple.com/place?auid=1118762829559591&lsp=57879",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-107-deep-read": {
          "brandId": "brand-exp80-i-107",
          "expectedName": "樂班Le’ban农场餐厅（米禾农场店）",
          "subjectName": "樂班Le’ban农场餐厅（米禾农场店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "MOS木石设计｜乐班农场餐厅",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/07/10/196801",
          "contentType": "article",
          "publishedAt": "2025-07-10",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-108-philosophy": {
          "brandId": "brand-exp80-i-108",
          "expectedName": "裕莲茶楼（西安万象城店）",
          "subjectName": "裕莲茶楼（西安万象城店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "YEAP LAB｜裕莲茶楼西安万象城店",
          "url": "https://www.hisheji.com/project/space-type/restaurant/tea/2025/02/11/191811",
          "publishedAt": "2025-02-11",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-108-store": {
          "brandId": "brand-exp80-i-108",
          "expectedName": "裕莲茶楼（西安万象城店）",
          "subjectName": "裕莲茶楼（西安万象城店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "裕莲茶楼西安万象城店地点页",
          "url": "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F9845FAA6676",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-108-deep-read": {
          "brandId": "brand-exp80-i-108",
          "expectedName": "裕莲茶楼（西安万象城店）",
          "subjectName": "裕莲茶楼（西安万象城店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "YEAP LAB｜裕莲茶楼西安万象城店",
          "url": "https://www.hisheji.com/project/space-type/restaurant/tea/2025/02/11/191811",
          "contentType": "article",
          "publishedAt": "2025-02-11",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-111-philosophy": {
          "brandId": "brand-exp80-i-111",
          "expectedName": "米林爸爸可颂（下浩里店）",
          "subjectName": "米林爸爸可颂（下浩里店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "赤橙建筑空间｜米林爸爸可颂下浩里店",
          "url": "https://www.hisheji.com/project/space-type/cafe/2025/01/07/190995",
          "publishedAt": "2025-01-07",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-111-store": {
          "brandId": "brand-exp80-i-111",
          "expectedName": "米林爸爸可颂（下浩里店）",
          "subjectName": "米林爸爸可颂（下浩里店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "米林爸爸可颂下浩里店地点页",
          "url": "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F987AB4290B1",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-111-deep-read": {
          "brandId": "brand-exp80-i-111",
          "expectedName": "米林爸爸可颂（下浩里店）",
          "subjectName": "米林爸爸可颂（下浩里店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "赤橙建筑空间｜米林爸爸可颂下浩里店",
          "url": "https://www.hisheji.com/project/space-type/cafe/2025/01/07/190995",
          "contentType": "article",
          "publishedAt": "2025-01-07",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-113-philosophy": {
          "brandId": "brand-exp80-i-113",
          "expectedName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "subjectName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "鼓浪屿虫洞书店：以文字打开岛屿",
          "url": "https://news.xmnn.cn/xmxw/202603/t20260324_416956.html",
          "publishedAt": "2026-03-24",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "厦门日报/厦门网页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-113-store": {
          "brandId": "brand-exp80-i-113",
          "expectedName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "subjectName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "晓学堂·虫洞书店地点页",
          "url": "https://gs.ctrip.com/html5/you/sight/xiamen21/5072704.html",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-113-deep-read": {
          "brandId": "brand-exp80-i-113",
          "expectedName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "subjectName": "晓学堂·虫洞书店（鼓浪屿海天堂构）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "鼓浪屿虫洞书店：以文字打开岛屿",
          "url": "https://news.xmnn.cn/xmxw/202603/t20260324_416956.html",
          "contentType": "article",
          "publishedAt": "2026-03-24",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "厦门日报/厦门网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-115-philosophy": {
          "brandId": "brand-exp80-i-115",
          "expectedName": "深圳书城湾区城（湾区之眼）",
          "subjectName": "深圳书城湾区城（湾区之眼）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "“湾区之眼”正式开放",
          "url": "https://www.sz.gov.cn/cn/xxgk/zfxxgj/sldzc/szfld/zh/jqhd/content/post_12415800.html",
          "publishedAt": "2025-09-28",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "深圳市人民政府页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-115-store": {
          "brandId": "brand-exp80-i-115",
          "expectedName": "深圳书城湾区城（湾区之眼）",
          "subjectName": "深圳书城湾区城（湾区之眼）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "government-brand-profile",
          "name": "“湾区之眼”正式开放",
          "url": "https://www.sz.gov.cn/cn/xxgk/zfxxgj/sldzc/szfld/zh/jqhd/content/post_12415800.html",
          "publishedAt": "2025-09-28",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "深圳市人民政府页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-115-deep-read": {
          "brandId": "brand-exp80-i-115",
          "expectedName": "深圳书城湾区城（湾区之眼）",
          "subjectName": "深圳书城湾区城（湾区之眼）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "湾区之眼：新型城市文化综合体",
          "url": "https://szwb.sz.gov.cn/gkmlpt/content/12/12775/post_12775801.html",
          "contentType": "article",
          "publishedAt": "2026-05-12",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "深圳市文化广电旅游体育局页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-116-philosophy": {
          "brandId": "brand-exp80-i-116",
          "expectedName": "Oneup（深圳万象天地店）",
          "subjectName": "Oneup（深圳万象天地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "of gaaarden design｜Oneup深圳万象天地店",
          "url": "https://www.hisheji.com/project/space-type/commercial-space/2026/03/05/202552",
          "publishedAt": "2026-03-05",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-116-store": {
          "brandId": "brand-exp80-i-116",
          "expectedName": "Oneup（深圳万象天地店）",
          "subjectName": "Oneup（深圳万象天地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "of gaaarden design｜Oneup深圳万象天地店",
          "url": "https://www.hisheji.com/project/space-type/commercial-space/2026/03/05/202552",
          "publishedAt": "2026-03-05",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-116-deep-read": {
          "brandId": "brand-exp80-i-116",
          "expectedName": "Oneup（深圳万象天地店）",
          "subjectName": "Oneup（深圳万象天地店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "of gaaarden design｜Oneup深圳万象天地店",
          "url": "https://www.hisheji.com/project/space-type/commercial-space/2026/03/05/202552",
          "contentType": "article",
          "publishedAt": "2026-03-05",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-117-philosophy": {
          "brandId": "brand-exp80-i-117",
          "expectedName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "subjectName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "KALI HOUSE & CAFE opening and programme",
          "url": "https://kaliart.cn/en/News/info/id/29.html",
          "publishedAt": "2025-12-08",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "KALI ART页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-117-store": {
          "brandId": "brand-exp80-i-117",
          "expectedName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "subjectName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "brand-website",
          "name": "KALI HOUSE & CAFE opening and programme",
          "url": "https://kaliart.cn/en/News/info/id/29.html",
          "publishedAt": "2025-12-08",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "KALI ART页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-117-deep-read": {
          "brandId": "brand-exp80-i-117",
          "expectedName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "subjectName": "KALI HOUSE & CAFE（深圳五矿金融大厦）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "KALI HOUSE & CAFE｜承迹景观",
          "url": "https://www.archina.com/index.php?a=show&g=Works&id=160752&m=index",
          "contentType": "article",
          "publishedAt": "2026-06-18",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "ARCHINA建筑中国页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-118-philosophy": {
          "brandId": "brand-exp80-i-118",
          "expectedName": "覔书店（深圳壹方城店）",
          "subjectName": "覔书店（深圳壹方城店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "覔书店：用文化内容连接城市生活",
          "url": "https://k.sina.cn/article_1677991972_64042024027011c9d.html",
          "publishedAt": "2024-04-24",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新浪页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-118-store": {
          "brandId": "brand-exp80-i-118",
          "expectedName": "覔书店（深圳壹方城店）",
          "subjectName": "覔书店（深圳壹方城店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "覔书店（壹方城店）",
          "url": "https://www.cityhui.com/shop/15486.html",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "城市惠页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-118-deep-read": {
          "brandId": "brand-exp80-i-118",
          "expectedName": "覔书店（深圳壹方城店）",
          "subjectName": "覔书店（深圳壹方城店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "覔书店：用文化内容连接城市生活",
          "url": "https://k.sina.cn/article_1677991972_64042024027011c9d.html",
          "contentType": "article",
          "publishedAt": "2024-04-24",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新浪页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-119-philosophy": {
          "brandId": "brand-exp80-i-119",
          "expectedName": "Kurasu（深圳湾万象城店）",
          "subjectName": "Kurasu（深圳湾万象城店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "brand-website",
          "name": "About Kurasu",
          "url": "https://kurasu.kyoto/pages/about-us",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Kurasu页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-119-store": {
          "brandId": "brand-exp80-i-119",
          "expectedName": "Kurasu（深圳湾万象城店）",
          "subjectName": "Kurasu（深圳湾万象城店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "Kurasu深圳湾万象城店地点页",
          "url": "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F98D62C54588",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-119-deep-read": {
          "brandId": "brand-exp80-i-119",
          "expectedName": "Kurasu（深圳湾万象城店）",
          "subjectName": "Kurasu（深圳湾万象城店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "了建筑｜Kurasu咖啡深圳湾万象城店",
          "url": "https://www.hisheji.com/project/space-type/cafe/2026/04/23/204171",
          "contentType": "article",
          "publishedAt": "2026-04-23",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-120-philosophy": {
          "brandId": "brand-exp80-i-120",
          "expectedName": "幸子食堂（胜利街店）",
          "subjectName": "幸子食堂（胜利街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "向生设计事务所｜幸子食堂",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/05/15/195505",
          "publishedAt": "2025-05-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-120-store": {
          "brandId": "brand-exp80-i-120",
          "expectedName": "幸子食堂（胜利街店）",
          "subjectName": "幸子食堂（胜利街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "向生设计事务所｜幸子食堂",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/05/15/195505",
          "publishedAt": "2025-05-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-120-deep-read": {
          "brandId": "brand-exp80-i-120",
          "expectedName": "幸子食堂（胜利街店）",
          "subjectName": "幸子食堂（胜利街店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "向生设计事务所｜幸子食堂",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/05/15/195505",
          "contentType": "article",
          "publishedAt": "2025-05-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-121-philosophy": {
          "brandId": "brand-exp80-i-121",
          "expectedName": "精武有食集（武汉越秀国金天地）",
          "subjectName": "精武有食集（武汉越秀国金天地）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "永创设计｜精武有食集",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2026/01/30/201713",
          "publishedAt": "2026-01-30",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-121-store": {
          "brandId": "brand-exp80-i-121",
          "expectedName": "精武有食集（武汉越秀国金天地）",
          "subjectName": "精武有食集（武汉越秀国金天地）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "越秀商管全国人文标杆IP“精武有食集”",
          "url": "https://m.winshang.com/news740917.html",
          "publishedAt": "2026-06-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "赢商网页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-121-deep-read": {
          "brandId": "brand-exp80-i-121",
          "expectedName": "精武有食集（武汉越秀国金天地）",
          "subjectName": "精武有食集（武汉越秀国金天地）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "越秀商管全国人文标杆IP“精武有食集”",
          "url": "https://m.winshang.com/news740917.html",
          "contentType": "article",
          "publishedAt": "2026-06-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "赢商网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-122-philosophy": {
          "brandId": "brand-exp80-i-122",
          "expectedName": "HOJI Bistro（西安量子晨店）",
          "subjectName": "HOJI Bistro（西安量子晨店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "超级理想建筑工作室｜HOJI Bistro",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/05/15/195430",
          "publishedAt": "2025-05-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-122-store": {
          "brandId": "brand-exp80-i-122",
          "expectedName": "HOJI Bistro（西安量子晨店）",
          "subjectName": "HOJI Bistro（西安量子晨店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "HOJI Bistro量子晨地点检索",
          "url": "https://map.baidu.com/search/HOJI%20Bistro%E8%A5%BF%E5%AE%89%E9%87%8F%E5%AD%90%E6%99%A8/@12127346,4041105,19z",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "百度地图页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-122-deep-read": {
          "brandId": "brand-exp80-i-122",
          "expectedName": "HOJI Bistro（西安量子晨店）",
          "subjectName": "HOJI Bistro（西安量子晨店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "超级理想建筑工作室｜HOJI Bistro",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/05/15/195430",
          "contentType": "article",
          "publishedAt": "2025-05-15",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-123-philosophy": {
          "brandId": "brand-exp80-i-123",
          "expectedName": "乌鹊JIU食肆（苏州首店）",
          "subjectName": "乌鹊JIU食肆（苏州首店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "木月建筑设计事务所｜乌鹊JIU食肆品牌全案概念店",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/12/23/200678",
          "publishedAt": "2025-12-23",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-123-store": {
          "brandId": "brand-exp80-i-123",
          "expectedName": "乌鹊JIU食肆（苏州首店）",
          "subjectName": "乌鹊JIU食肆（苏州首店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "乌鹊JIU地点页",
          "url": "https://maps.apple.com/place?auid=1118897972750945&lsp=57879",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-123-deep-read": {
          "brandId": "brand-exp80-i-123",
          "expectedName": "乌鹊JIU食肆（苏州首店）",
          "subjectName": "乌鹊JIU食肆（苏州首店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "乌鹊JIU食肆 / 木月建筑",
          "url": "https://www.gooood.cn/wuque-jiu-restaurant-design-by-moon-architects.htm",
          "contentType": "article",
          "publishedAt": "2025-06-30",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gooood谷德设计网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-124-philosophy": {
          "brandId": "brand-exp80-i-124",
          "expectedName": "河谷咖啡（仙居神仙居店）",
          "subjectName": "河谷咖啡（仙居神仙居店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "平介设计｜河谷咖啡",
          "url": "https://www.hisheji.com/project/space-type/cafe/2025/09/24/197803",
          "publishedAt": "2025-09-24",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-124-store": {
          "brandId": "brand-exp80-i-124",
          "expectedName": "河谷咖啡（仙居神仙居店）",
          "subjectName": "河谷咖啡（仙居神仙居店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "仙居河谷咖啡女性创业空间",
          "url": "https://www.womenofchina.com/flsy/2025/1110/20323.html",
          "publishedAt": "2025-11-10",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国妇女网页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-124-deep-read": {
          "brandId": "brand-exp80-i-124",
          "expectedName": "河谷咖啡（仙居神仙居店）",
          "subjectName": "河谷咖啡（仙居神仙居店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "平介设计｜河谷咖啡",
          "url": "https://www.hisheji.com/project/space-type/cafe/2025/09/24/197803",
          "contentType": "article",
          "publishedAt": "2025-09-24",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-125-philosophy": {
          "brandId": "brand-exp80-i-125",
          "expectedName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "subjectName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Fieldwork Baker & Co.",
          "url": "https://www.hcreates.design/restaurants-bars/fieldworkbaker?lang=zh",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hcreates页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-125-store": {
          "brandId": "brand-exp80-i-125",
          "expectedName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "subjectName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "Fieldwork Baker宁波门店当前观察",
          "url": "https://www.sohu.com/a/971364348_121119292",
          "publishedAt": "2025-12-28",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "搜狐城市页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-125-deep-read": {
          "brandId": "brand-exp80-i-125",
          "expectedName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "subjectName": "Fieldwork Baker & Co.麦田工坊（宁波万象汇店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Fieldwork Baker & Co.",
          "url": "https://www.hcreates.design/restaurants-bars/fieldworkbaker?lang=zh",
          "contentType": "article",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hcreates页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-126-philosophy": {
          "brandId": "brand-exp80-i-126",
          "expectedName": "shanya山下洋食（杭州印店）",
          "subjectName": "shanya山下洋食（杭州印店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "现象设计｜shanya山下洋食",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2025/03/17/193283",
          "publishedAt": "2025-03-17",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-126-store": {
          "brandId": "brand-exp80-i-126",
          "expectedName": "shanya山下洋食（杭州印店）",
          "subjectName": "shanya山下洋食（杭州印店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "杭州印shanya山下洋食当前访问",
          "url": "https://hk.trip.com/moments/binjiang-district-2015176/",
          "publishedAt": "2026-04-18",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Trip.com页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-126-deep-read": {
          "brandId": "brand-exp80-i-126",
          "expectedName": "shanya山下洋食（杭州印店）",
          "subjectName": "shanya山下洋食（杭州印店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "shanya山下洋食 / 现象设计",
          "url": "https://www.gooood.cn/shanya-western-food-restaurant-by-xianxiangdesign.htm",
          "contentType": "article",
          "publishedAt": "2025-02-24",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gooood谷德设计网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-128-philosophy": {
          "brandId": "brand-exp80-i-128",
          "expectedName": "SANG TEA桑茶（杭州中山北路店）",
          "subjectName": "SANG TEA桑茶（杭州中山北路店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "知见设计工作室｜SANG TEA桑茶中山北路店",
          "url": "https://www.hisheji.com/project/space-type/restaurant/tea/2024/10/26/186429",
          "publishedAt": "2024-10-26",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-128-store": {
          "brandId": "brand-exp80-i-128",
          "expectedName": "SANG TEA桑茶（杭州中山北路店）",
          "subjectName": "SANG TEA桑茶（杭州中山北路店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "SANG TEA桑茶中山北路地点检索",
          "url": "https://map.baidu.com/search/SANG%20TEA%20%E6%A1%91%E8%8C%B6%20%E4%B8%AD%E5%B1%B1%E5%8C%97%E8%B7%AF/",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "百度地图页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-128-deep-read": {
          "brandId": "brand-exp80-i-128",
          "expectedName": "SANG TEA桑茶（杭州中山北路店）",
          "subjectName": "SANG TEA桑茶（杭州中山北路店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "知见设计工作室｜SANG TEA桑茶中山北路店",
          "url": "https://www.hisheji.com/project/space-type/restaurant/tea/2024/10/26/186429",
          "contentType": "article",
          "publishedAt": "2024-10-26",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-130-philosophy": {
          "brandId": "brand-exp80-i-130",
          "expectedName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "subjectName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "TRIOSTUDIO三厘社｜富贵山下",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2026/06/02/204871",
          "publishedAt": "2026-06-02",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-130-store": {
          "brandId": "brand-exp80-i-130",
          "expectedName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "subjectName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "富贵山下开业观察",
          "url": "https://www.sina.cn/news/detail/5300324080552218.html",
          "publishedAt": "2026-05-19",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新浪新闻页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-130-deep-read": {
          "brandId": "brand-exp80-i-130",
          "expectedName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "subjectName": "富贵山下·日茶夜酒（金陵长乐坊店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "TRIOSTUDIO三厘社｜富贵山下",
          "url": "https://www.hisheji.com/project/space-type/restaurant/2026/06/02/204871",
          "contentType": "article",
          "publishedAt": "2026-06-02",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-131-philosophy": {
          "brandId": "brand-exp80-i-131",
          "expectedName": "32HOW（厦门华新路店）",
          "subjectName": "32HOW（厦门华新路店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "厦门32HOW咖啡馆品牌与经营观察",
          "url": "https://www.gafei.com/kafeibiji-120619",
          "publishedAt": "2026-08-29",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "咖啡工房页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-131-store": {
          "brandId": "brand-exp80-i-131",
          "expectedName": "32HOW（厦门华新路店）",
          "subjectName": "32HOW（厦门华新路店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "厦门32HOW咖啡馆品牌与经营观察",
          "url": "https://www.gafei.com/kafeibiji-120619",
          "publishedAt": "2026-08-29",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "咖啡工房页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-131-deep-read": {
          "brandId": "brand-exp80-i-131",
          "expectedName": "32HOW（厦门华新路店）",
          "subjectName": "32HOW（厦门华新路店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "厦门32HOW咖啡馆品牌与经营观察",
          "url": "https://www.gafei.com/kafeibiji-120619",
          "contentType": "article",
          "publishedAt": "2026-08-29",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "咖啡工房页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-132-philosophy": {
          "brandId": "brand-exp80-i-132",
          "expectedName": "可一书店·仙林艺术中心",
          "subjectName": "可一书店·仙林艺术中心",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "可一书店·仙林艺术中心：让人愿意待下来的空间",
          "url": "https://jsnews.jschina.com.cn/jsyw/202606/t20260607_s6a258a0be4b0f1b15e699a99.shtml",
          "publishedAt": "2026-06-07",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国江苏网页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-132-store": {
          "brandId": "brand-exp80-i-132",
          "expectedName": "可一书店·仙林艺术中心",
          "subjectName": "可一书店·仙林艺术中心",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "media-brand-profile",
          "name": "可一书店·仙林艺术中心：让人愿意待下来的空间",
          "url": "https://jsnews.jschina.com.cn/jsyw/202606/t20260607_s6a258a0be4b0f1b15e699a99.shtml",
          "publishedAt": "2026-06-07",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国江苏网页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-132-deep-read": {
          "brandId": "brand-exp80-i-132",
          "expectedName": "可一书店·仙林艺术中心",
          "subjectName": "可一书店·仙林艺术中心",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "可一书店·仙林艺术中心：让人愿意待下来的空间",
          "url": "https://jsnews.jschina.com.cn/jsyw/202606/t20260607_s6a258a0be4b0f1b15e699a99.shtml",
          "contentType": "article",
          "publishedAt": "2026-06-07",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "中国江苏网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-133-philosophy": {
          "brandId": "brand-exp80-i-133",
          "expectedName": "之仓咖啡（西安米禾农场店）",
          "subjectName": "之仓咖啡（西安米禾农场店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "之仓咖啡，西安 / MOS木石设计",
          "url": "https://www.gooood.cn/zhichang-coffee-by-mos-wood-stone-design.htm",
          "publishedAt": "2024-11-22",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gooood谷德设计网页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-133-store": {
          "brandId": "brand-exp80-i-133",
          "expectedName": "之仓咖啡（西安米禾农场店）",
          "subjectName": "之仓咖啡（西安米禾农场店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "之仓咖啡地点页",
          "url": "https://www.amap.com/place/B0KD4PT94V",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "高德地图页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-133-deep-read": {
          "brandId": "brand-exp80-i-133",
          "expectedName": "之仓咖啡（西安米禾农场店）",
          "subjectName": "之仓咖啡（西安米禾农场店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "之仓咖啡，西安 / MOS木石设计",
          "url": "https://www.gooood.cn/zhichang-coffee-by-mos-wood-stone-design.htm",
          "contentType": "article",
          "publishedAt": "2024-11-22",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "gooood谷德设计网页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-134-philosophy": {
          "brandId": "brand-exp80-i-134",
          "expectedName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "subjectName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "government-brand-profile",
          "name": "WHATEVER咖啡湖滨新天地店开业",
          "url": "https://www.sipac.gov.cn/szgyyq/dthg202509/202509/71d82de3a61645648d31cf71877da470.shtml",
          "publishedAt": "2025-09-30",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "苏州工业园区管委会页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-134-store": {
          "brandId": "brand-exp80-i-134",
          "expectedName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "subjectName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "WHATEVER咖啡地点页",
          "url": "https://maps.apple.com/place?auid=1118811749145160&lsp=57879",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-134-deep-read": {
          "brandId": "brand-exp80-i-134",
          "expectedName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "subjectName": "WHATEVER咖啡（苏州湖滨新天地店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Whatever咖啡湖滨新天地店",
          "url": "https://www.designverse.com.cn/article/space/453483",
          "contentType": "article",
          "publishedAt": "2026-04-14",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Designverse设计宇宙页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-136-philosophy": {
          "brandId": "brand-exp80-i-136",
          "expectedName": "POKAPOKA面包商店（苏州十全街店）",
          "subjectName": "POKAPOKA面包商店（苏州十全街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "Poka Poka面包商店",
          "url": "https://mydesignplus.cn/work_detail.asp?ID=951",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "设计加页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-136-store": {
          "brandId": "brand-exp80-i-136",
          "expectedName": "POKAPOKA面包商店（苏州十全街店）",
          "subjectName": "POKAPOKA面包商店（苏州十全街店）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "POKAPOKA（十全街店）地点页",
          "url": "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F944178F29D9",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-136-deep-read": {
          "brandId": "brand-exp80-i-136",
          "expectedName": "POKAPOKA面包商店（苏州十全街店）",
          "subjectName": "POKAPOKA面包商店（苏州十全街店）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "Poka Poka面包商店",
          "url": "https://mydesignplus.cn/work_detail.asp?ID=951",
          "contentType": "article",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "设计加页面已核对经营方法与空间机制。"
        },
        "brand-exp80-i-137-philosophy": {
          "brandId": "brand-exp80-i-137",
          "expectedName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "subjectName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "authority": "professional-brand-analysis",
          "name": "马孔多全国首店落地北京朝阳大悦城",
          "url": "https://news.sina.cn/sx/2026-04-12/detail-inhufeak0698147.d.html?vt=4",
          "publishedAt": "2026-04-12",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "新浪新闻页面已核对品牌身份与理念归因。"
        },
        "brand-exp80-i-137-store": {
          "brandId": "brand-exp80-i-137",
          "expectedName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "subjectName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "store-city",
            "store-address"
          ],
          "authority": "official-map-listing",
          "name": "朝阳大悦城地点页",
          "url": "https://maps.apple.com/place?address=No.101%2C+Chaoyang+North+Road+Chaoyang%2C+Beijing+China&auid=1117160141693095&coordinate=39.9243872%2C116.5183334&lsp=57879&name=Joy+City+Chaoyang",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Apple Maps页面已核对当前空间、城市与地址。"
        },
        "brand-exp80-i-137-deep-read": {
          "brandId": "brand-exp80-i-137",
          "expectedName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "subjectName": "MACONDO马孔多全国首店（北京朝阳大悦城）",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "authority": "professional-brand-analysis",
          "name": "ISENSE DESIGN｜MACONDO马孔多全国首店",
          "url": "https://www.hisheji.com/project/space-type/retail/2026/06/04/204934",
          "contentType": "article",
          "publishedAt": "2026-06-04",
          "observedAt": "2026-08-31",
          "checkedAt": "2026-08-31",
          "linkStatus": "active",
          "basis": "Hi设计页面已核对经营方法与空间机制。"
        }
      }
    },
    "projects": [
      {
        "id": "case-26",
        "name": "苏州双塔市集",
        "dna": {
          "code": "LSBR"
        }
      },
      {
        "id": "case-27",
        "name": "南京小西湖",
        "dna": {
          "code": "LCME"
        }
      },
      {
        "id": "case-29",
        "name": "深圳前海欢乐港湾",
        "dna": {
          "code": "DSBR"
        }
      },
      {
        "id": "case-30",
        "name": "宁夏中卫黄河宿集",
        "dna": {
          "code": "DSME"
        }
      },
      {
        "id": "case-31",
        "name": "阿那亚·秦皇岛",
        "dna": {
          "code": "DSMR"
        }
      },
      {
        "id": "case-38",
        "name": "北京檀谷",
        "dna": {
          "code": "DSMR"
        }
      },
      {
        "id": "case-40",
        "name": "重庆绿心",
        "dna": {
          "code": "LCME"
        }
      },
      {
        "id": "case-41",
        "name": "成都东郊记忆",
        "dna": {
          "code": "DCMR"
        }
      },
      {
        "id": "case-24",
        "name": "上生新所",
        "dna": {
          "code": "DCMR"
        }
      },
      {
        "id": "case-5",
        "name": "鸿寿坊",
        "dna": {
          "code": "LCMR"
        }
      },
      {
        "id": "case-42",
        "name": "EMSPHERE",
        "dna": {
          "code": "DCBR"
        }
      },
      {
        "id": "case-43",
        "name": "C86山茶坊",
        "dna": {
          "code": "LCME"
        }
      },
      {
        "id": "case-1",
        "name": "深业上城",
        "dna": {
          "code": "DCBR"
        }
      },
      {
        "id": "case-44",
        "name": "深圳A Park",
        "dna": {
          "code": "LCMR"
        }
      }
    ],
    "recommendations": {
      "brand-exp80-c-021": [
        "case-27",
        "case-5"
      ],
      "brand-exp80-c-026": [
        "case-27",
        "case-5"
      ],
      "brand-exp80-c-028": [
        "case-27",
        "case-5"
      ],
      "brand-exp80-d-032": [
        "case-38",
        "case-29"
      ],
      "brand-exp80-d-035": [
        "case-38",
        "case-29"
      ],
      "brand-exp80-d-037": [
        "case-38",
        "case-29"
      ],
      "brand-exp80-d-041": [
        "case-38",
        "case-29"
      ],
      "brand-exp80-d-047": [
        "case-38",
        "case-29"
      ],
      "brand-exp80-d-050": [
        "case-38",
        "case-29"
      ],
      "brand-exp80-g-071": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-g-072": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-g-073": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-g-074": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-g-078": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-g-079": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-g-080": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-h-081": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-082": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-085": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-086": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-089": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-090": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-092": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-097": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-101": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-102": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-105": [
        "case-26",
        "case-43"
      ],
      "brand-exp80-h-106": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-011": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-012": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-013": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-014": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-015": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-018": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-019": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-020": [
        "case-26",
        "case-43"
      ],
      "brand-expansion-20260830-051": [
        "case-41",
        "case-44"
      ],
      "brand-expansion-20260830-052": [
        "case-41",
        "case-44"
      ],
      "brand-expansion-20260830-053": [
        "case-41",
        "case-44"
      ],
      "brand-expansion-20260830-058": [
        "case-41",
        "case-44"
      ],
      "brand-expansion-20260830-069": [
        "case-41",
        "case-44"
      ],
      "brand-expansion-20260830-070": [
        "case-41",
        "case-44"
      ],
      "brand-expansion-20260830-culture-001": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-culture-002": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-culture-003": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-culture-004": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-culture-005": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-culture-006": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-culture-007": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-culture-009": [
        "case-27",
        "case-5"
      ],
      "brand-expansion-20260830-dining-bars-002": [
        "case-42",
        "case-5"
      ],
      "brand-expansion-20260830-dining-bars-004": [
        "case-42",
        "case-5"
      ],
      "brand-expansion-20260830-dining-bars-005": [
        "case-42",
        "case-5"
      ],
      "brand-expansion-20260830-dining-bars-011": [
        "case-42",
        "case-5"
      ],
      "brand-expansion-20260830-dining-bars-012": [
        "case-42",
        "case-5"
      ],
      "brand-expansion-20260830-dining-bars-013": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-107": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-108": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-111": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-113": [
        "case-27",
        "case-5"
      ],
      "brand-exp80-i-115": [
        "case-27",
        "case-5"
      ],
      "brand-exp80-i-116": [
        "case-38",
        "case-29"
      ],
      "brand-exp80-i-117": [
        "case-24",
        "case-5"
      ],
      "brand-exp80-i-118": [
        "case-27",
        "case-5"
      ],
      "brand-exp80-i-119": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-120": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-121": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-122": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-123": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-124": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-125": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-126": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-128": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-130": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-131": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-132": [
        "case-27",
        "case-5"
      ],
      "brand-exp80-i-133": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-134": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-136": [
        "case-42",
        "case-5"
      ],
      "brand-exp80-i-137": [
        "case-38",
        "case-29"
      ]
    }
  };

  const byId = new Map(system.brandLibrary.map(item => [item.id, item]));
  const byName = new Map(system.brandLibrary.map(item => [item.name, item]));
  extension.brands.forEach(item => {
    const idMatch = byId.get(item.id);
    const nameMatch = byName.get(item.name);
    if (idMatch || nameMatch) {
      if (idMatch?.name !== item.name || nameMatch?.id !== item.id) {
        throw new Error(`80家扩展发生ID或名称冲突：${item.id} / ${item.name}`);
      }
      return;
    }
    system.brandLibrary.push({ ...item });
    byId.set(item.id, item);
    byName.set(item.name, item);
  });

  const priorGroups = new Map((system.brandGroups || []).map(group => [group.category, group]));
  const counts = system.brandLibrary.reduce((result, item) => {
    result[item.category] = (result[item.category] || 0) + 1;
    return result;
  }, {});
  system.brandGroups = Object.entries(counts).map(([category, count]) => ({
    ...(priorGroups.get(category) || {}),
    category,
    count,
  }));

  globalScope.COMMERCIAL_DNA_APPROVED_BRAND_EXPANSION_80_V0_1 = deepFreeze(extension);
})(typeof window !== "undefined" ? window : globalThis);
