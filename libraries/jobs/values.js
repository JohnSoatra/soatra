const regHex = /^([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const excludePairs = [
    // fontsize
    "fs-16", "fs-17", "fs-18", "fs-19", "fs-20", "fs-21", "fs-22", "fs-23",
    "fs-24", "fs-25", "fs-26", "fs-27", "fs-28", "fs-29", "fs-30",
    
    // flex
    "f-1",

    // z-index
    "z-1",

    // w, h, mxw, mxh
    "w-0",
    "w-100p",
    "w-fc",

    "h-0",
    "h-100p",
    "h-fc",
    
    "mxw-fc",
    "mxh-fc",

    // animation
    "aic-1",
    "aic-if",

    "adu-1000",

    // grid
    "gtc-1", "gtc-2", "gtc-3", "gtc-4", "gtc-5", "gtc-6",
    "gtc-7", "gtc-8", "gtc-9", "gtc-10", "gtc-11", "gtc-12",

    "gtr-1", "gtr-2", "gtr-3", "gtr-4", "gtr-5", "gtr-6",
    "gtr-7", "gtr-8", "gtr-9", "gtr-10", "gtr-11", "gtr-12",
    
    // top, left, bottom, right
    "t-0", "t-100p", "l-0", "l-100p",
    "b-0", "b-100p", "r-0", "r-100p",

]
const classPairsCss = {
  // size
    "w-": ["width", "px"],
    "h-": ["height", "px"],
    "gap-": ["gap", "px"],
    "cg-": ["column-gap", "px"],
    "rg-": ["row-gap", "px"],

    // position
    "t-": ["top", "px"],
    "b-": ["bottom", "px"],
    "l-": ["left", "px"],
    "r-": ["right", "px"],
    
    // backdrop-filter
    "bfb-": ["backdrop-filter", "px"],
    
    // border
    "bw-": ["border-width", "px"],
    "blw-": ["border-left-width", "px"],
    "brw-": ["border-right-width", "px"],
    "btw-": ["border-top-width", "px"],
    "bbw-": ["border-bottom-width", "px"],
    
    // border radius
    "br-": ["border-radius", "px"],
    "btlr-": ["border-top-left-radius", "px"],
    "btrr-": ["border-top-right-radius", "px"],
    "bblr-": ["border-bottom-left-radius", "px"],
    "bbrr-": ["border-bottom-right-radius", "px"],

    // border-color
    "bc-": ["border-color", "#"],
    "blc-": ["border-left-color", "#"],
    "brc-": ["border-right-color", "#"],
    "btc-": ["border-top-color", "#"],
    "bbc-": ["border-bottom-color", "#"],

    // background-color
    "bgc-": ["background-color", "#"],

    // color
    "c-": ["color", "#"],

    //text-decorator-color
    "tdc-": ["text-decoration-color", "#"],

    // font-size
    "fs-": ["font-size", "px"],

    // flex
    "f-": ["flex", ""],
    // flex
    "fi-": ["fill", "#"],

    // opacity
    "o-": ["opacity", "."],
    
    // padding
    "p-": ["padding", "px"],
    "pl-": ["padding-left", "px"],
    "pr-": ["padding-right", "px"],
    "pt-": ["padding-top", "px"],
    "pb-": ["padding-bottom", "px"],
    
    // margin
    "m-": ["margin", "px"],
    "ml-": ["margin-left", "px"],
    "mr-": ["margin-right", "px"],
    "mt-": ["margin-top", "px"],
    "mb-": ["margin-bottom", "px"],

    // min-width, min-height
    "mnw-": ["min-width", "px"],
    "mnh-": ["min-height", "px"],

    // max-width, max-height
    "mxw-": ["max-width", "px"],
    "mxh-": ["max-height", "px"],

    // z-index
    "z-": ["z-index", ""],

    // animation
    "adu-": ["animation-duration", "ms"],
    "ade-": ["animation-delay", "ms"],
    "aic": ["animation-iteration-count"],

    // grid
    "gtc-": ["grid-template-columns", "fr"],
    "gtr-": ["grid-template-rows", "fr"],
};

const classPairsDataTitle = {
    // size
    "dt-w-": ["width", "px"],
    "dt-h-": ["height", "px"],

    // position
    "dt-t-": ["top", "px"],
    "dt-b-": ["bottom", "px"],
    "dt-l-": ["left", "px"],
    "dt-r-": ["right", "px"],
    
    // backdrop-filter
    "dt-bfb-": ["backdrop-filter", "px"],
    
    // border
    "dt-bw-": ["border-width", "px"],
    "dt-blw-": ["border-left-width", "px"],
    "dt-brw-": ["border-right-width", "px"],
    "dt-btw-": ["border-top-width", "px"],
    "dt-bbw-": ["border-bottom-width", "px"],
    
    // border radius
    "dt-br-": ["border-radius", "px"],
    "dt-btlr-": ["border-top-left-radius", "px"],
    "dt-btrr-": ["border-top-right-radius", "px"],
    "dt-bblr-": ["border-bottom-left-radius", "px"],
    "dt-bbrr-": ["border-bottom-right-radius", "px"],

    // border-color
    "dt-bc-": ["border-color", "#"],
    "dt-blc-": ["border-left-color", "#"],
    "dt-brc-": ["border-right-color", "#"],
    "dt-btc-": ["border-top-color", "#"],
    "dt-bbc-": ["border-bottom-color", "#"],

    // background-color
    "dt-bgc-": ["background-color", "#"],

    // color
    "dt-c-": ["color", "#"],

    //text-decorator-color
    "dt-tdc-": ["text-decoration-color", "#"],

    // font-size
    "dt-fs-": ["font-size", "px"],

    // flex
    "dt-f-": ["flex", ""],
    // flex
    "dt-fi-": ["fill", "#"],

    // opacity
    "dt-o-": ["opacity", "."],
    
    // padding
    "dt-p-": ["padding", "px"],
    "dt-pl-": ["padding-left", "px"],
    "dt-pr-": ["padding-right", "px"],
    "dt-pt-": ["padding-top", "px"],
    "dt-pb-": ["padding-bottom", "px"],
    
    // margin
    "dt-m-": ["margin", "px"],
    "dt-ml-": ["margin-left", "px"],
    "dt-mr-": ["margin-right", "px"],
    "dt-mt-": ["margin-top", "px"],
    "dt-mb-": ["margin-bottom", "px"],

    // min-width, min-height
    "dt-mnw-": ["min-width", "px"],
    "dt-mnh-": ["min-height", "px"],

    // max-width, max-height
    "dt-mxw-": ["max-width", "px"],
    "dt-mxh-": ["max-height", "px"],

    // z-index
    "dt-z-": ["z-index", ""],

    // animation
    "dt-adu-": ["animation-duration", "ms"],
    "dt-ade-": ["animation-delay", "ms"],
    "dt-aic": ["animation-iteration-count"],

    // grid
    "dt-gtc-": ["grid-template-columns", "fr"],
    "dt-gtr-": ["grid-template-rows", "fr"],
};

const pairSize = {
    //font-size
    "xs-fs-": ["font-size", "px"],
    "sm-fs-": ["font-size", "px"],
    "md-fs-": ["font-size", "px"],
    "lg-fs-": ["font-size", "px"],
    "xl-fs-": ["font-size", "px"],

    //flex
    "xs-f-": ["flex", ""],
    "sm-f-": ["flex", ""],
    "md-f-": ["flex", ""],
    "lg-f-": ["flex", ""],
    "xl-f-": ["flex", ""],

    // size
    "xs-w-": ["width", "px"],
    "sm-w-": ["width", "px"],
    "md-w-": ["width", "px"],
    "lg-w-": ["width", "px"],
    "xl-w-": ["width", "px"],
    
    "xs-h-": ["height", "px"],
    "sm-h-": ["height", "px"],
    "md-h-": ["height", "px"],
    "lg-h-": ["height", "px"],
    "xl-h-": ["height", "px"],

    // padding
    "xs-p-": ["padding", "px"],
    "xs-pl-": ["padding-left", "px"],
    "xs-pr-": ["padding-right", "px"],
    "xs-pt-": ["padding-top", "px"],
    "xs-pb-": ["padding-bottom", "px"],

    "sm-p-": ["padding", "px"],
    "sm-pl-": ["padding-left", "px"],
    "sm-pr-": ["padding-right", "px"],
    "sm-pt-": ["padding-top", "px"],
    "sm-pb-": ["padding-bottom", "px"],

    "md-p-": ["padding", "px"],
    "md-pl-": ["padding-left", "px"],
    "md-pr-": ["padding-right", "px"],
    "md-pt-": ["padding-top", "px"],
    "md-pb-": ["padding-bottom", "px"],

    "lg-p-": ["padding", "px"],
    "lg-pl-": ["padding-left", "px"],
    "lg-pr-": ["padding-right", "px"],
    "lg-pt-": ["padding-top", "px"],
    "lg-pb-": ["padding-bottom", "px"],
    
    "xl-p-": ["padding", "px"],
    "xl-pl-": ["padding-left", "px"],
    "xl-pr-": ["padding-right", "px"],
    "xl-pt-": ["padding-top", "px"],
    "xl-pb-": ["padding-bottom", "px"],
    
    // margin
    "xs-m-": ["margin", "px"],
    "xs-ml-": ["margin-left", "px"],
    "xs-mr-": ["margin-right", "px"],
    "xs-mt-": ["margin-top", "px"],
    "xs-mb-": ["margin-bottom", "px"],

    "sm-m-": ["margin", "px"],
    "sm-ml-": ["margin-left", "px"],
    "sm-mr-": ["margin-right", "px"],
    "sm-mt-": ["margin-top", "px"],
    "sm-mb-": ["margin-bottom", "px"],
    
    "md-m-": ["margin", "px"],
    "md-ml-": ["margin-left", "px"],
    "md-mr-": ["margin-right", "px"],
    "md-mt-": ["margin-top", "px"],
    "md-mb-": ["margin-bottom", "px"],
    
    "lg-m-": ["margin", "px"],
    "lg-ml-": ["margin-left", "px"],
    "lg-mr-": ["margin-right", "px"],
    "lg-mt-": ["margin-top", "px"],
    "lg-mb-": ["margin-bottom", "px"],
    
    "xl-m-": ["margin", "px"],
    "xl-ml-": ["margin-left", "px"],
    "xl-mr-": ["margin-right", "px"],
    "xl-mt-": ["margin-top", "px"],
    "xl-mb-": ["margin-bottom", "px"],

    // min-width, min-height
    "xs-mnw-": ["min-width", "px"],
    "xs-mnh-": ["min-height", "px"],

    "sm-mnw-": ["min-width", "px"],
    "sm-mnh-": ["min-height", "px"],

    "md-mnw-": ["min-width", "px"],
    "md-mnh-": ["min-height", "px"],

    "lg-mnw-": ["min-width", "px"],
    "lg-mnh-": ["min-height", "px"],

    "xl-mnw-": ["min-width", "px"],
    "xl-mnh-": ["min-height", "px"],

    // max-width, max-height
    "xs-mxw-": ["max-width", "px"],
    "xs-mxh-": ["max-height", "px"],

    "sm-mxw-": ["max-width", "px"],
    "sm-mxh-": ["max-height", "px"],
    
    "md-mxw-": ["max-width", "px"],
    "md-mxh-": ["max-height", "px"],
    
    "lg-mxw-": ["max-width", "px"],
    "lg-mxh-": ["max-height", "px"],
    
    "xl-mxw-": ["max-width", "px"],
    "xl-mxh-": ["max-height", "px"],

    // gap
    "xs-gap-": ["gap", "px"],
    "sm-gap-": ["gap", "px"],
    "md-gap-": ["gap", "px"],
    "lg-gap-": ["gap", "px"],
    "xl-gap-": ["gap", "px"],
    
    "xs-cg-": ["column-gap", "px"],
    "sm-cg-": ["column-gap", "px"],
    "md-cg-": ["column-gap", "px"],
    "lg-cg-": ["column-gap", "px"],
    "xl-cg-": ["column-gap", "px"],

    "xs-rg-": ["row-gap", "px"],
    "sm-rg-": ["row-gap", "px"],
    "md-rg-": ["row-gap", "px"],
    "lg-rg-": ["row-gap", "px"],
    "xl-rg-": ["row-gap", "px"],

    // grid
    "xs-gtc-": ["grid-template-columns", "fr"],
    "sm-gtc-": ["grid-template-columns", "fr"],
    "md-gtc-": ["grid-template-columns", "fr"],
    "lg-gtc-": ["grid-template-columns", "fr"],
    "xl-gtc-": ["grid-template-columns", "fr"],
    
    "xs-gtr-": ["grid-template-rows", "fr"],
    "sm-gtr-": ["grid-template-rows", "fr"],
    "md-gtr-": ["grid-template-rows", "fr"],
    "lg-gtr-": ["grid-template-rows", "fr"],
    "xl-gtr-": ["grid-template-rows", "fr"],
}

const pairSizeDown = {
    //font-size
    "d-xs-fs-": ["font-size", "px"],
    "d-sm-fs-": ["font-size", "px"],
    "d-md-fs-": ["font-size", "px"],
    "d-lg-fs-": ["font-size", "px"],
    "d-xl-fs-": ["font-size", "px"],
    
    //flex
    "d-xs-f-": ["flex", ""],
    "d-sm-f-": ["flex", ""],
    "d-md-f-": ["flex", ""],
    "d-lg-f-": ["flex", ""],
    "d-xl-f-": ["flex", ""],
    
    // size
    "d-xs-w-": ["width", "px"],
    "d-sm-w-": ["width", "px"],
    "d-md-w-": ["width", "px"],
    "d-lg-w-": ["width", "px"],
    "d-xl-w-": ["width", "px"],
    
    "d-xs-h-": ["height", "px"],
    "d-sm-h-": ["height", "px"],
    "d-md-h-": ["height", "px"],
    "d-lg-h-": ["height", "px"],
    "d-xl-h-": ["height", "px"],

    // padding
    "d-xs-p-": ["padding", "px"],
    "d-xs-pl-": ["padding-left", "px"],
    "d-xs-pr-": ["padding-right", "px"],
    "d-xs-pt-": ["padding-top", "px"],
    "d-xs-pb-": ["padding-bottom", "px"],

    "d-sm-p-": ["padding", "px"],
    "d-sm-pl-": ["padding-left", "px"],
    "d-sm-pr-": ["padding-right", "px"],
    "d-sm-pt-": ["padding-top", "px"],
    "d-sm-pb-": ["padding-bottom", "px"],

    "d-md-p-": ["padding", "px"],
    "d-md-pl-": ["padding-left", "px"],
    "d-md-pr-": ["padding-right", "px"],
    "d-md-pt-": ["padding-top", "px"],
    "d-md-pb-": ["padding-bottom", "px"],

    "d-lg-p-": ["padding", "px"],
    "d-lg-pl-": ["padding-left", "px"],
    "d-lg-pr-": ["padding-right", "px"],
    "d-lg-pt-": ["padding-top", "px"],
    "d-lg-pb-": ["padding-bottom", "px"],
    
    "d-xl-p-": ["padding", "px"],
    "d-xl-pl-": ["padding-left", "px"],
    "d-xl-pr-": ["padding-right", "px"],
    "d-xl-pt-": ["padding-top", "px"],
    "d-xl-pb-": ["padding-bottom", "px"],
    
    // margin
    "d-xs-m-": ["margin", "px"],
    "d-xs-ml-": ["margin-left", "px"],
    "d-xs-mr-": ["margin-right", "px"],
    "d-xs-mt-": ["margin-top", "px"],
    "d-xs-mb-": ["margin-bottom", "px"],

    "d-sm-m-": ["margin", "px"],
    "d-sm-ml-": ["margin-left", "px"],
    "d-sm-mr-": ["margin-right", "px"],
    "d-sm-mt-": ["margin-top", "px"],
    "d-sm-mb-": ["margin-bottom", "px"],
    
    "d-md-m-": ["margin", "px"],
    "d-md-ml-": ["margin-left", "px"],
    "d-md-mr-": ["margin-right", "px"],
    "d-md-mt-": ["margin-top", "px"],
    "d-md-mb-": ["margin-bottom", "px"],
    
    "d-lg-m-": ["margin", "px"],
    "d-lg-ml-": ["margin-left", "px"],
    "d-lg-mr-": ["margin-right", "px"],
    "d-lg-mt-": ["margin-top", "px"],
    "d-lg-mb-": ["margin-bottom", "px"],
    
    "d-xl-m-": ["margin", "px"],
    "d-xl-ml-": ["margin-left", "px"],
    "d-xl-mr-": ["margin-right", "px"],
    "d-xl-mt-": ["margin-top", "px"],
    "d-xl-mb-": ["margin-bottom", "px"],

    // min-width, min-height
    "d-xs-mnw-": ["min-width", "px"],
    "d-xs-mnh-": ["min-height", "px"],

    "d-sm-mnw-": ["min-width", "px"],
    "d-sm-mnh-": ["min-height", "px"],

    "d-md-mnw-": ["min-width", "px"],
    "d-md-mnh-": ["min-height", "px"],

    "d-lg-mnw-": ["min-width", "px"],
    "d-lg-mnh-": ["min-height", "px"],

    "d-xl-mnw-": ["min-width", "px"],
    "d-xl-mnh-": ["min-height", "px"],

    // max-width, max-height
    "d-xs-mxw-": ["max-width", "px"],
    "d-xs-mxh-": ["max-height", "px"],

    "d-sm-mxw-": ["max-width", "px"],
    "d-sm-mxh-": ["max-height", "px"],
    
    "d-md-mxw-": ["max-width", "px"],
    "d-md-mxh-": ["max-height", "px"],
    
    "d-lg-mxw-": ["max-width", "px"],
    "d-lg-mxh-": ["max-height", "px"],
    
    "d-xl-mxw-": ["max-width", "px"],
    "d-xl-mxh-": ["max-height", "px"],
    
    // gap
    "d-xs-gap-": ["gap", "px"],
    "d-sm-gap-": ["gap", "px"],
    "d-md-gap-": ["gap", "px"],
    "d-lg-gap-": ["gap", "px"],
    "d-xl-gap-": ["gap", "px"],

    "d-xs-cg-": ["column-gap", "px"],
    "d-sm-cg-": ["column-gap", "px"],
    "d-md-cg-": ["column-gap", "px"],
    "d-lg-cg-": ["column-gap", "px"],
    "d-xl-cg-": ["column-gap", "px"],

    "d-xs-rg-": ["row-gap", "px"],
    "d-sm-rg-": ["row-gap", "px"],
    "d-md-rg-": ["row-gap", "px"],
    "d-lg-rg-": ["row-gap", "px"],
    "d-xl-rg-": ["row-gap", "px"],

    // grid
    "d-xs-gtc-": ["grid-template-columns", "fr"],
    "d-sm-gtc-": ["grid-template-columns", "fr"],
    "d-md-gtc-": ["grid-template-columns", "fr"],
    "d-lg-gtc-": ["grid-template-columns", "fr"],
    "d-xl-gtc-": ["grid-template-columns", "fr"],
    
    "d-xs-gtr-": ["grid-template-rows", "fr"],
    "d-sm-gtr-": ["grid-template-rows", "fr"],
    "d-md-gtr-": ["grid-template-rows", "fr"],
    "d-lg-gtr-": ["grid-template-rows", "fr"],
    "d-xl-gtr-": ["grid-template-rows", "fr"],
}

export default {
    classPairsCss,
    classPairsDataTitle,
    pairSize,
    pairSizeDown,
    regHex,
    excludePairs
}

export {
    classPairsCss,
    classPairsDataTitle,
    pairSize,
    pairSizeDown,
    regHex,
    excludePairs
}
