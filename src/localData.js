import notFound from "./assets/images/not-found.png";
const images = {
    notFound,
    showcaseCover: require("./assets/images/home-cover.jpg"),
    showcaseCoverSm: require("./assets/images/home-cover-sm.jpg"),
    aboutCover: require("./assets/images/about.jpg"),
    phoneTop: require("./assets/images/phones/phone-top.png"),
    phoneMiddle: require("./assets/images/phones/phone-middle.png"),
    phoneBottom: require("./assets/images/phones/phone-bottom.png"),
    googlePlay: require("./assets/images/google-play.png"),
    appStore: require("./assets/images/app-store.png"),
    phone1: require("./assets/images/tracking/phone-1.png"),
    phone2: require("./assets/images/tracking/phone-2.png"),
    phone3: require("./assets/images/tracking/phone-3.png"),
    phone4: require("./assets/images/tracking/phone-4.png"),
    phone5: require("./assets/images/tracking/phone-5.png"),
    business: require("./assets/images/business.jpg"),
    construction: require("./assets/images/construction.jpg"),
    technology: require("./assets/images/technology.jpg"),
    subscribe: require("./assets/images/subscribe.jpg"),

    // BUILDER
    calculator: require("./assets/images/icons/builder/calculator.png"),
    track: require("./assets/images/icons/builder/track.png"),
    invoices: require("./assets/images/icons/builder/invoices.png"),
    client: require("./assets/images/icons/builder/client.png"),
    leads: require("./assets/images/icons/builder/leads.png"),
    expenses: require("./assets/images/icons/builder/expenses.png"),
    books: require("./assets/images/icons/builder/books.png"),
};

const localData = {
    images,
    svgs: {
        logo: (
            <svg width="220" height="93" viewBox="0 0 220 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M103.13 33.5217C101.238 32.4237 99.0904 31.8745 96.6875 31.8745C94.3445 31.8745 92.234 32.4159 90.3574 33.4991C88.4794 34.5822 86.9927 36.0644 85.8969 37.9444C84.8003 39.8252 84.2369 41.9382 84.2073 44.285V65.5863C84.2073 66.1277 84.365 66.5567 84.6804 66.8723C84.9954 67.1886 85.4238 67.3466 85.9643 67.3466C86.4748 67.3466 86.8883 67.1886 87.2033 66.8723C87.5187 66.5567 87.6764 66.1277 87.6764 65.5863V52.3181C88.6678 53.7327 89.9813 54.8678 91.6187 55.7255C93.2554 56.5829 95.0801 57.0115 97.0928 57.0115C99.4055 57.0115 101.478 56.4631 103.31 55.3643C105.142 54.2663 106.592 52.7694 107.658 50.8741C108.724 48.9785 109.258 46.8426 109.258 44.4653C109.258 42.0587 108.709 39.9072 107.613 38.0119C106.516 36.1163 105.023 34.6204 103.13 33.5217ZM104.639 49.2718C103.843 50.7013 102.754 51.8216 101.373 52.634C99.9911 53.4465 98.4289 53.8525 96.6875 53.8525C94.9753 53.8525 93.4279 53.4465 92.047 52.634C90.6651 51.8216 89.5833 50.7013 88.8026 49.2718C88.0211 47.8434 87.6313 46.2411 87.6313 44.4653C87.6313 42.6605 88.0211 41.0511 88.8026 39.6365C89.5833 38.2229 90.6651 37.1023 92.047 36.2746C93.4279 35.4473 94.9753 35.0335 96.6875 35.0335C98.4289 35.0335 99.9911 35.4473 101.373 36.2746C102.754 37.1023 103.843 38.2229 104.639 39.6365C105.435 41.0511 105.834 42.6605 105.834 44.4653C105.834 46.2411 105.435 47.8434 104.639 49.2718Z"
                    fill="#9B392C"
                />
                <path
                    d="M133.659 33.5217C131.782 32.424 129.656 31.8745 127.284 31.8745C124.911 31.8745 122.779 32.424 120.886 33.5217C118.994 34.6204 117.5 36.1167 116.403 38.0123C115.307 39.9075 114.759 42.059 114.759 44.4656C114.759 46.8429 115.292 48.9788 116.358 50.8745C117.424 52.7697 118.873 54.2667 120.706 55.3647C122.538 56.4634 124.61 57.0119 126.923 57.0119C129.116 57.0119 131.076 56.5083 132.803 55.5001C134.206 54.6812 135.367 53.62 136.295 52.3244V55.0714C136.295 55.5831 136.459 55.9966 136.791 56.3125C137.12 56.6284 137.54 56.7864 138.052 56.7864C138.563 56.7864 138.982 56.6284 139.313 56.3125C139.644 55.9966 139.809 55.5831 139.809 55.0714V44.4656C139.779 42.059 139.216 39.9075 138.119 38.0123C137.023 36.1167 135.536 34.6204 133.659 33.5217ZM131.947 52.6344C130.58 53.4465 129.026 53.8529 127.284 53.8529C125.572 53.8529 124.024 53.4465 122.643 52.6344C121.262 51.8219 120.165 50.7017 119.355 49.2722C118.544 47.8434 118.138 46.2414 118.138 44.4656C118.138 42.6605 118.544 41.0515 119.355 39.6368C120.165 38.2233 121.262 37.1026 122.643 36.275C124.024 35.4477 125.572 35.0339 127.284 35.0339C129.026 35.0339 130.58 35.4477 131.947 36.275C133.313 37.1026 134.395 38.2233 135.191 39.6368C135.986 41.0515 136.385 42.6605 136.385 44.4656C136.385 46.2414 135.986 47.8434 135.191 49.2722C134.395 50.7017 133.313 51.8219 131.947 52.6344Z"
                    fill="#9B392C"
                />
                <path
                    d="M165.849 32.2351C164.857 31.8142 164.137 32.0849 163.686 33.0475L155.302 51.5594L146.52 33.0023C146.31 32.551 146.009 32.2577 145.619 32.1223C145.229 31.987 144.808 32.0252 144.358 32.2351C143.907 32.446 143.607 32.7471 143.456 33.1376C143.306 33.5292 143.336 33.9501 143.547 34.4014L153.594 55.2514C153.6 55.2637 153.609 55.2729 153.615 55.2849L149.134 65.18C148.683 66.1727 148.968 66.8947 149.99 67.3463C150.289 67.4661 150.56 67.5265 150.801 67.5265C151.371 67.5265 151.807 67.1806 152.107 66.4886L166.705 34.3562C167.156 33.3631 166.87 32.6567 165.849 32.2351Z"
                    fill="#9B392C"
                />
                <path
                    d="M185.963 32.9573C184.416 32.2353 182.726 31.8745 180.895 31.8745C178.581 31.8745 176.539 32.4237 174.767 33.5217C172.994 34.6204 171.597 36.1163 170.577 38.0119C169.555 39.9075 169.045 42.0587 169.045 44.4653C169.045 46.8426 169.578 48.9785 170.644 50.8741C171.71 52.7694 173.167 54.2663 175.015 55.3643C176.862 56.4631 178.972 57.0115 181.345 57.0115C184.618 57.0115 187.352 56.004 189.545 53.9879C189.875 53.6875 190.018 53.3267 189.973 52.9047C189.927 52.4838 189.725 52.1078 189.365 51.7767C189.033 51.506 188.674 51.3858 188.283 51.4155C187.893 51.4459 187.517 51.6116 187.157 51.912C186.406 52.5743 185.542 53.0627 184.566 53.3786C183.59 53.6946 182.516 53.8525 181.345 53.8525C179.603 53.8525 178.056 53.4465 176.704 52.634C175.353 51.8216 174.301 50.7091 173.551 49.2944C172.799 47.8808 172.424 46.2708 172.424 44.4653C172.424 42.6308 172.777 41.0062 173.483 39.5916C174.188 38.1777 175.179 37.0645 176.457 36.252C177.733 35.4396 179.212 35.0335 180.895 35.0335C183.537 35.0335 185.73 36.0262 187.472 38.0119C187.772 38.3731 188.125 38.5915 188.531 38.6664C188.936 38.742 189.304 38.6593 189.635 38.4183C190.056 38.1179 190.311 37.7638 190.401 37.3574C190.491 36.9514 190.371 36.5676 190.04 36.2068C188.869 34.7625 187.51 33.6797 185.963 32.9573Z"
                    fill="#9B392C"
                />
                <path
                    d="M218.536 37.0642C217.56 35.3492 216.231 34.0483 214.549 33.1606C212.867 32.2732 210.959 31.829 208.827 31.829C206.874 31.829 205.102 32.2577 203.51 33.1154C202.392 33.7172 201.433 34.4788 200.627 35.3923V33.86V23.2995C200.627 22.7581 200.469 22.3294 200.154 22.0135C199.838 21.6975 199.425 21.5396 198.915 21.5396C198.374 21.5396 197.946 21.6975 197.631 22.0135C197.316 22.3294 197.157 22.7581 197.157 23.2995V33.86V44.9619V55.0708C197.157 55.5828 197.316 55.9959 197.631 56.3119C197.946 56.6278 198.374 56.7858 198.915 56.7858C199.425 56.7858 199.838 56.6278 200.154 56.3119C200.469 55.9959 200.627 55.5828 200.627 55.0708V44.9619V41.7124C200.627 40.449 200.972 39.3206 201.663 38.328C202.354 37.3349 203.292 36.5528 204.479 35.9811C205.665 35.41 206.994 35.1237 208.466 35.1237C209.998 35.1237 211.372 35.4248 212.589 36.0259C213.805 36.6285 214.766 37.531 215.472 38.734C216.177 39.9377 216.531 41.4721 216.531 43.337V55.0708C216.531 55.5524 216.696 55.9588 217.027 56.2893C217.357 56.6208 217.777 56.7858 218.288 56.7858C218.768 56.7858 219.174 56.6208 219.505 56.2893C219.835 55.9588 220 55.5524 220 55.0708V43.337C220 40.8706 219.512 38.7792 218.536 37.0642Z"
                    fill="#9B392C"
                />
                <path
                    d="M61.3284 16.082C58.4548 11.1153 54.5404 7.19478 49.5824 4.31602C44.6241 1.43938 38.9964 0 32.7006 0C26.5621 0 21.0322 1.41888 16.1144 4.257C11.1949 7.09512 7.29922 10.9786 4.42702 15.9046C1.55341 20.8323 0.0779703 26.3697 0 32.5187V88.3326C0 89.7511 0.413137 90.8749 1.23976 91.7026C2.06604 92.5306 3.18761 92.9444 4.60413 92.9444C5.94162 92.9444 7.02403 92.5306 7.85065 91.7026C8.67693 90.8749 9.09006 89.7511 9.09006 88.3326V53.567C11.6874 57.2734 15.1294 60.2483 19.4195 62.4951C23.7083 64.7417 28.4895 65.8651 33.7632 65.8651C39.8227 65.8651 45.2528 64.4275 50.0544 61.5488C54.854 58.6725 58.6523 54.7494 61.4469 49.7832C64.2394 44.8165 65.6372 39.2198 65.6372 32.9916C65.6372 26.6856 64.2006 21.0482 61.3284 16.082ZM56.5736 35.3063L46.7483 52.3523C45.9019 53.8214 44.3372 54.7261 42.6441 54.7261H22.9935C21.3004 54.7261 19.7357 53.8214 18.8889 52.3523L9.06396 35.3063C8.21722 33.8376 8.21722 32.0279 9.06396 30.5588L18.8889 13.5128C19.7357 12.0437 21.3004 11.139 22.9935 11.139H42.6441C44.3372 11.139 45.9019 12.0437 46.7483 13.5128L56.5736 30.5588C57.4203 32.0279 57.4203 33.8376 56.5736 35.3063Z"
                    fill="#9B392C"
                />
            </svg>
        ),
        play: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
        ),
        p: (
            <svg width="829" height="1159" viewBox="0 0 829 1159" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    opacity="0.05"
                    d="M774.579 200.539C738.286 138.606 688.847 89.7176 626.227 53.82C563.603 17.9488 492.526 0 413.009 0C335.48 0 265.638 17.6932 203.526 53.084C141.392 88.4749 92.1893 136.901 55.9134 198.327C19.6196 259.775 0.984767 328.825 0 405.503V1101.49C0 1119.18 5.21793 1133.19 15.6582 1143.51C26.0941 1153.84 40.2596 1159 58.1503 1159C75.0428 1159 88.7137 1153.84 99.154 1143.51C109.59 1133.19 114.808 1119.18 114.808 1101.49V667.97C147.613 714.189 191.085 751.285 245.269 779.303C299.436 807.317 359.823 821.326 426.431 821.326C502.962 821.326 571.544 803.399 632.189 767.502C692.808 731.635 740.781 682.716 776.077 620.787C811.346 558.854 829 489.064 829 411.399C829 332.765 810.855 262.468 774.579 200.539ZM714.526 440.263L590.432 652.824C579.743 671.143 559.98 682.425 538.596 682.425H290.408C269.024 682.425 249.262 671.143 238.568 652.824L114.478 440.263C103.784 421.949 103.784 399.382 114.478 381.063L238.568 168.502C249.262 150.183 269.024 138.902 290.408 138.902H538.596C559.98 138.902 579.743 150.183 590.432 168.502L714.526 381.063C725.221 399.382 725.221 421.949 714.526 440.263Z"
                    fill="#C5C2C2"
                />
            </svg>
        ),
        checkmark: (
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 9L8.66667 16L22 2"
                    stroke="#9B392C"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        arrow: (
            <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.454615 12.1578L11.8185 0.315786C12.2226 -0.105262 12.7781 -0.105262 13.1821 0.315786L24.5454 12.1578C25.0474 12.681 25.1492 13.6707 24.7727 14.3683C24.5494 14.782 24.2082 15 23.8627 15C23.6255 15 23.3861 14.897 23.1818 14.6841L12.5002 3.5526L1.81824 14.6841C1.31605 15.2074 0.603857 15.0659 0.227345 14.3683C-0.149244 13.6707 -0.0474262 12.681 0.454615 12.1578Z"
                    fill="#F5F5F5"
                />
            </svg>
        ),
        phone: (
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M41.2931 51.3749C39.0818 51.3749 35.9757 50.5752 31.3243 47.9765C25.6682 44.8046 21.2933 41.8763 15.6677 36.2655C10.2438 30.845 7.60436 27.3355 3.91026 20.6134C-0.263019 13.0236 0.448387 9.04512 1.24362 7.34477C2.19065 5.3125 3.58854 4.097 5.39538 2.89055C6.42165 2.21815 7.5077 1.64176 8.63976 1.16868C8.75304 1.11996 8.85839 1.07352 8.95241 1.03161C9.51315 0.778988 10.3628 0.39723 11.4389 0.805043C12.1571 1.07465 12.7983 1.62633 13.802 2.61754C15.8603 4.64754 18.6731 9.1686 19.7107 11.3889C20.4074 12.8854 20.8685 13.8732 20.8696 14.9811C20.8696 16.2781 20.2171 17.2784 19.4253 18.358C19.2769 18.5607 19.1296 18.7545 18.9869 18.9425C18.1248 20.0753 17.9356 20.4027 18.0602 20.9872C18.3128 22.162 20.1967 25.6589 23.2927 28.7481C26.3887 31.8373 29.7848 33.6022 30.9641 33.8537C31.5735 33.984 31.9077 33.7869 33.0768 32.8942C33.2444 32.7662 33.4166 32.6337 33.5967 32.5011C34.8043 31.6028 35.7582 30.9673 37.0246 30.9673H37.0314C38.1337 30.9673 39.0773 31.4454 40.6406 32.2338C42.6796 33.2624 47.3366 36.0389 49.3791 38.0995C50.3726 39.1009 50.9265 39.7398 51.1973 40.4569C51.6051 41.5364 51.221 42.3827 50.9707 42.9491C50.9288 43.0431 50.8823 43.1462 50.8336 43.2606C50.3568 44.3906 49.777 45.4744 49.1016 46.4982C47.8974 48.2993 46.6773 49.6938 44.6405 50.642C43.5946 51.1367 42.45 51.3873 41.2931 51.3749Z"
                    fill="#9B392C"
                />
            </svg>
        ),
        message: (
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18.4875V39.7618L15.196 29.8845L0 18.4875Z" fill="#9B392C" />
                <path d="M58.0002 39.7618V18.4875L42.8042 29.8845L58.0002 39.7618Z" fill="#9B392C" />
                <path
                    d="M29 40.2375L18.9018 32.6638L0 44.95V49.3H58V44.95L39.0982 32.6638L29 40.2375Z"
                    fill="#9B392C"
                />
                <path d="M0 13.05L29 34.7999L58 13.05V8.69995H0V13.05Z" fill="#9B392C" />
            </svg>
        ),
        location: (
            <svg width="35" height="49" viewBox="0 0 35 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.5001 49C17.5001 49 0.350098 26.6315 0.350098 17.15C0.350098 14.8978 0.793696 12.6677 1.65556 10.587C2.51743 8.50625 3.78069 6.61564 5.37322 5.02312C6.96574 3.43059 8.85634 2.16733 10.9371 1.30547C13.0178 0.443598 15.2479 0 17.5001 0C19.7523 0 21.9824 0.443598 24.0631 1.30547C26.1439 2.16733 28.0345 3.43059 29.627 5.02312C31.2195 6.61564 32.4828 8.50625 33.3446 10.587C34.2065 12.6677 34.6501 14.8978 34.6501 17.15C34.6501 26.6315 17.5001 49 17.5001 49ZM17.5001 22.05C18.7997 22.05 20.046 21.5338 20.9649 20.6148C21.8838 19.6959 22.4001 18.4496 22.4001 17.15C22.4001 15.8504 21.8838 14.6041 20.9649 13.6852C20.046 12.7662 18.7997 12.25 17.5001 12.25C16.2005 12.25 14.9542 12.7662 14.0353 13.6852C13.1163 14.6041 12.6001 15.8504 12.6001 17.15C12.6001 18.4496 13.1163 19.6959 14.0353 20.6148C14.9542 21.5338 16.2005 22.05 17.5001 22.05Z"
                    fill="#9B392C"
                />
            </svg>
        ),
        search: (
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M28.6345 26.933L20.314 18.5997C21.9543 16.6309 22.9409 14.1149 22.9409 11.3668C22.9409 5.09753 17.8 0 11.4764 0C5.15278 0 0 5.10348 0 11.3728C0 17.6421 5.1409 22.7396 11.4645 22.7396C14.1508 22.7396 16.6232 21.8177 18.5845 20.2771L26.9347 28.6342C27.4221 29.1219 28.1471 29.1219 28.6345 28.6342C29.1218 28.1464 29.1218 27.4208 28.6345 26.933ZM2.43673 11.3728C2.43673 6.44775 6.49001 2.44467 11.4645 2.44467C16.439 2.44467 20.4923 6.44775 20.4923 11.3728C20.4923 16.2978 16.439 20.3009 11.4645 20.3009C6.49001 20.3009 2.43673 16.2919 2.43673 11.3728Z"
                    fill="#D0D0D0"
                />
            </svg>
        ),

        togglerIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
            </svg>
        ),
        telegram: (
            <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SendIcon"
            >
                <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
        ),
        trash: (
            <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="DeleteIcon"
            >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
        ),
        angleRight: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" />
            </svg>
        ),
        angleLeft: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
            </svg>
        ),
    },

    error: {
        "not-found": {
            message: "not found",
            cover: notFound,
            status: 404,
        },
        "connection-error": {
            message: "connection error",
            cover: notFound,
            status: 400,
        },
    },
};

export default localData;
