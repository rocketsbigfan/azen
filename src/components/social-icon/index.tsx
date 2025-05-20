import { motion, useAnimate } from "motion/react";

export const Twitter = () => {
  const [scope, animate] = useAnimate()
  const handleHoverStart = () => {
    animate('rect', {
      stroke: 'url(#rect_color_twitter)',
    })
    animate('path', {
      fill: 'url(#path_color_twitter)',
    })
  };

  const handleHoverEnd = () => {
    animate('rect', {
      stroke: 'url(#rect_white_twitter)'
    })
    animate('path', {
      fill: 'url(#path_white_twitter)'
    })
  };
  return <motion.svg
    onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd}
    ref={scope}
    className='max-md:w-[44px] max-md:h-[44px]'
    xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
    <rect x="0.45185" y="0.45185" width="101.214" height="101.214" rx="17.6222" stroke="url(#rect_white_twitter)" strokeWidth="0.903701" />
    <path d="M65.8505 28.0156H73.7116L56.5413 47.5777L76.8147 74.1044H60.8856L48.4733 58.0245L34.1992 74.1044H26.3381L44.7496 53.2108L25.3037 28.0156H41.6465L52.921 42.764L65.8505 28.0156ZM63.0577 69.3931H67.402L39.2675 32.4197H34.5095L63.0577 69.3931Z" fill="url(#path_white_twitter)" />
    <defs>
      <linearGradient id="rect_white_twitter" x1="3.54203e-07" y1="5.4222" x2="102.118" y2="98.5034" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="0.68513" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="path_white_twitter" x1="25.3037" y1="68.867" x2="78.4466" y2="66.6205" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient id="rect_color_twitter" x1="3.54203e-07" y1="5.4222" x2="102.118" y2="98.5034" gradientUnits="userSpaceOnUse">
        <stop stopColor="#75EB36" />
        <stop offset="0.68513" stopColor="#E3FF57" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="path_color_twitter" x1="25.3037" y1="68.867" x2="78.4466" y2="66.6205" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C0EE02" />
        <stop offset="1" stopColor="#90FF6B" />
      </linearGradient>
    </defs>
  </motion.svg>
}

export const Tg = () => {

  const [scope, animate] = useAnimate()
  const handleHoverStart = () => {
    animate('rect', {
      stroke: 'url(#rect_color_tg)',
    })
    animate('path', {
      fill: 'url(#path_color_tg)',
    })
  };

  const handleHoverEnd = () => {
    animate('rect', {
      stroke: 'url(#white_tg)'
    })
    animate('path', {
      fill: 'white'
    })
  };
  return <motion.svg
    onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd}
    ref={scope}
    className='max-md:w-[44px] max-md:h-[44px]'
    xmlns="http://www.w3.org/2000/svg" width="104" height="103" viewBox="0 0 104 103" fill="none">
    <rect x="1.34736" y="0.45185" width="101.214" height="101.214" rx="17.6222" stroke="url(#white_tg)" strokeWidth="0.903701" />
    <path d="M71.0491 29.3089C71.0491 29.3089 76.3158 27.3921 75.8769 32.0471C75.7306 33.9639 74.414 40.6725 73.3898 47.9288L69.8787 69.4239C69.8787 69.4239 69.5862 72.5728 66.9527 73.1205C64.3193 73.668 60.3694 71.2037 59.6378 70.656C59.0526 70.2453 48.6655 64.0843 45.008 61.0723C43.9839 60.2508 42.8135 58.6078 45.1542 56.6911L60.5156 43.0001C62.2712 41.3571 64.0268 37.5236 56.7118 42.1786L36.2301 55.1851C36.2301 55.1851 33.8893 56.5542 29.5005 55.322L19.991 52.5838C19.991 52.5838 16.4799 50.5302 22.4781 48.4764C37.108 42.0416 55.1026 35.4698 71.0491 29.3089Z" fill="white" />
    <defs>
      <linearGradient id="white_tg" x1="103.014" y1="102.118" x2="-2.26744" y2="-4.97035" gradientUnits="userSpaceOnUse">
        <stop offset="0.31487" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient id="rect_color_tg" x1="103.014" y1="102.118" x2="-2.26744" y2="-4.97035" gradientUnits="userSpaceOnUse">
        <stop offset="0.31487" stopColor="#E3FF57" stopOpacity="0" />
        <stop offset="1" stopColor="#75EB36" />
      </linearGradient>
      <linearGradient id="path_color_tg" x1="18.9697" y1="68.1673" x2="77.6727" y2="65.3126" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C0EE02" />
        <stop offset="1" stopColor="#90FF6B" />
      </linearGradient>
    </defs>
  </motion.svg>
}

export const Linkedin = () => {

  const [scope, animate] = useAnimate()
  const handleHoverStart = () => {
    animate('rect', {
      stroke: 'url(#rect_color_linkedin)',
    })
    animate('path', {
      fill: 'url(#path_color_linkedin)',
    })
  };

  const handleHoverEnd = () => {
    animate('rect', {
      stroke: 'url(#white_linkedin)'
    })
    animate('path', {
      fill: 'white'
    })
  };
  return <motion.svg
    onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd}
    ref={scope}
    className='max-md:w-[44px] max-md:h-[44px]'
    xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
    <rect x="1.24287" y="0.45185" width="101.214" height="101.214" rx="17.6222" stroke="url(#white_linkedin)" strokeWidth="0.903701" />
    <path d="M30.7729 37.1731H41.039V71.3124H30.7729V37.1731ZM35.9325 23.4961C34.5218 23.4961 33.1688 24.0568 32.1712 25.0548C31.1737 26.0528 30.6133 27.4065 30.6133 28.8179C30.6882 30.178 31.2815 31.4576 32.271 32.3931C33.2606 33.3287 34.571 33.849 35.9325 33.847C37.294 33.849 38.6045 33.3287 39.594 32.3931C40.5836 31.4576 41.1769 30.178 41.2518 28.8179C41.2518 27.4065 40.6913 26.0528 39.6938 25.0548C38.6962 24.0568 37.3433 23.4961 35.9325 23.4961ZM75.1619 41.6966C74.1213 40.4962 72.8146 39.5558 71.3461 38.9505C69.8777 38.3453 68.2881 38.092 66.7043 38.2109C64.6573 38.1633 62.6359 38.6728 60.8559 39.6851C59.0759 40.6974 57.6041 42.1744 56.5977 43.9584H56.4382V37.1731H47.821C47.9806 40.6589 47.821 71.3124 47.821 71.3124H58.0871V50.1051C58.3226 48.9389 58.9723 47.8975 59.9159 47.1735C60.8596 46.4495 62.0334 46.0919 63.2202 46.1669C66.5447 46.1669 68.1937 48.5884 68.1937 53.2715V71.3922H78.4864V51.9677C78.6927 48.2496 77.5075 44.5879 75.1619 41.6966Z" fill="white" />
    <defs>
      <linearGradient id="white_linkedin" x1="103.014" y1="102.118" x2="-2.26744" y2="-4.97035" gradientUnits="userSpaceOnUse">
        <stop offset="0.31487" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>

      <linearGradient id="rect_color_linkedin" x1="102.909" y1="106.637" x2="0.791011" y2="-4.97035" gradientUnits="userSpaceOnUse">
        <stop offset="0.31487" stopColor="#E3FF57" stopOpacity="0" />
        <stop offset="1" stopColor="#75EB36" />
      </linearGradient>
      <linearGradient id="path_color_linkedin" x1="30.6133" y1="65.9495" x2="80.0444" y2="64.0798" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C0EE02" />
        <stop offset="1" stopColor="#90FF6B" />
      </linearGradient>
    </defs>
  </motion.svg>
}
export const Gitbook = () => {

  const [scope, animate] = useAnimate()
  const handleHoverStart = () => {
    animate('rect', {
      stroke: 'url(#rect_color_gb)',
    })
    animate('path', {
      fill: 'url(#path_color_gb)',
    })
  };

  const handleHoverEnd = () => {
    animate('rect', {
      stroke: 'url(#white_bg)'
    })
    animate('path', {
      fill: 'white'
    })
  };
  return <motion.svg
    onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd}
    ref={scope}
    className='max-md:w-[44px] max-md:h-[44px]'
    xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
    <rect x="1.13837" y="0.45185" width="101.214" height="101.214" rx="17.6222" stroke="url(#white_bg)" strokeWidth="0.903701" />
    <path d="M47.0443 52.6882C49.8908 54.4345 51.2709 55.2203 52.9097 55.2203C54.5486 55.2203 56.015 54.3472 58.7752 52.6882L76.7165 42.2105C77.579 41.5993 78.0966 40.8135 78.0966 39.9403C78.0966 39.0672 77.4928 37.9321 76.7165 37.4082L58.5164 26.9305C55.6699 25.1843 54.2898 24.3984 52.651 24.3984C51.0121 24.3984 49.5457 25.2716 46.7855 26.9305L31.3457 35.9239C31.3457 35.9239 31.0869 35.9239 31.0869 36.1858C25.739 39.3291 22.375 45.3538 22.375 51.5531V52.1643C22.375 58.4509 25.739 64.1263 31.0869 67.5316L31.3457 67.7935L41.1789 73.469C46.7855 76.8742 49.8908 78.6205 52.996 78.6205C56.1012 78.6205 58.8614 76.8742 64.8131 73.469L75.1639 67.5316C78.0103 65.7853 79.3904 64.9995 80.253 63.5151C81.1156 62.1181 81.1156 60.3718 81.1156 56.9666V50.418C81.1156 49.5449 80.5118 48.6718 79.7355 48.1479C78.8729 47.5367 78.0103 47.5367 77.234 48.1479L55.7562 60.6338C54.3761 61.5069 53.5135 61.7689 52.9097 61.7689C52.0472 61.7689 51.5296 61.5069 50.0633 60.6338L35.7447 52.077C34.6234 51.4658 34.3646 51.4658 34.0196 51.2039C33.4158 51.2039 32.6395 51.4658 32.2945 52.077V54.6091C32.2945 55.2203 32.8983 55.7442 33.157 56.3554C33.4158 56.9666 33.7608 56.9666 34.2784 57.4905L49.7183 66.5711C51.0984 67.4443 51.9609 67.7062 52.5647 67.7062C53.4273 67.7062 53.9448 67.4443 55.4112 66.5711L74.215 55.5696C74.8188 55.3076 75.0776 54.9584 75.0776 55.3076C75.3364 55.3076 75.3364 55.5696 75.3364 56.1808V59.0621C75.3364 59.9353 75.3364 60.1972 75.0776 60.8084C74.8188 61.0704 74.4738 61.4196 73.6975 61.6816L58.2576 70.5876C55.4112 72.3339 54.0311 73.1197 52.3922 73.1197C50.7533 73.1197 49.287 72.2466 46.5268 70.5876L31.9495 62.0308C29.103 60.2845 27.4641 56.8793 27.4641 53.2121V50.3307C27.4641 48.3225 28.5855 46.6635 30.3106 45.5284C31.6907 44.6553 33.6746 44.6553 35.0547 45.5284L47.0443 52.6882Z" fill="white" />
    <defs>
      <linearGradient id="white_bg" x1="102.909" y1="106.637" x2="0.791011" y2="-4.97035" gradientUnits="userSpaceOnUse">
        <stop offset="0.31487" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient id="rect_color_gb" x1="-2.47643" y1="-3.16295" x2="108.227" y2="102.118" gradientUnits="userSpaceOnUse">
        <stop stopColor="#75EB36" />
        <stop offset="0.68513" stopColor="#E3FF57" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="path_color_gb" x1="22.375" y1="72.4589" x2="82.9831" y2="69.9755" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C0EE02" />
        <stop offset="1" stopColor="#90FF6B" />
      </linearGradient>
    </defs>
  </motion.svg>
}
export const Medium = () => {

  const [scope, animate] = useAnimate()
  const handleHoverStart = () => {
    animate('rect', {
      stroke: 'url(#rect_color_m)',
    })
    animate('.path1', {
      fill: 'url(#paint1_linear_1808_407)',
    })
    animate('.path2', {
      fill: 'url(#paint2_linear_1808_407)',
    })
    animate('.path3', {
      fill: 'url(#paint3_linear_1808_407)',
    })
  };

  const handleHoverEnd = () => {
    animate('rect', {
      stroke: 'url(#white_tg)'
    })
    animate('path', {
      fill: 'white'
    })
  };

  return <motion.svg
    onHoverStart={handleHoverStart}
    onHoverEnd={handleHoverEnd}
    ref={scope}
    className='max-md:w-[44px] max-md:h-[44px]'
    xmlns="http://www.w3.org/2000/svg" width="104" height="103" viewBox="0 0 104 103" fill="none">
    <rect x="0.45185" y="0.45185" width="101.214" height="101.214" rx="17.6222" stroke="url(#white_tg)" strokeWidth="0.903701" />
    <path className="path1" d="M54.2325 51.1867C54.2325 60.9891 46.3403 68.9354 36.6053 68.9354C26.8703 68.9354 18.9775 60.9891 18.9775 51.1867C18.9775 41.3844 26.8697 33.4375 36.6053 33.4375C46.3409 33.4375 54.2325 41.3844 54.2325 51.1867Z" fill="white" />
    <path className="path2" d="M73.5702 51.1861C73.5702 60.4129 69.6241 67.8956 64.7563 67.8956C59.8885 67.8956 55.9424 60.4129 55.9424 51.1861C55.9424 41.9593 59.8879 34.4766 64.7557 34.4766C69.6235 34.4766 73.5696 41.9569 73.5696 51.1861" fill="white" />
    <path className="path3" d="M81.4804 51.1879C81.4804 59.4528 80.0927 66.157 78.3805 66.157C76.6683 66.157 75.2812 59.4546 75.2812 51.1879C75.2812 42.9211 76.6689 36.2188 78.3805 36.2188C80.0921 36.2188 81.4804 42.9205 81.4804 51.1879Z" fill="white" />
    <defs>
      <linearGradient id="white_tg" x1="103.926" y1="99.4071" x2="0" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0.31487" stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
      <linearGradient id="rect_color_m" x1="103.926" y1="99.4071" x2="0" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0.31487" stopColor="#E3FF57" stopOpacity="0" />
        <stop offset="1" stopColor="#75EB36" />
      </linearGradient>
      <linearGradient id="paint1_linear_1808_407" x1="18.9775" y1="64.9015" x2="55.3631" y2="63.5347" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D8FF37" />
        <stop offset="1" stopColor="#90FF6B" />
      </linearGradient>
      <linearGradient id="paint2_linear_1808_407" x1="55.9424" y1="64.098" x2="74.1539" y2="63.7347" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C0EE02" />
        <stop offset="1" stopColor="#90FF6B" />
      </linearGradient>
      <linearGradient id="paint3_linear_1808_407" x1="75.2813" y1="62.7549" x2="81.6878" y2="62.7047" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C0EE02" />
        <stop offset="1" stopColor="#90FF6B" />
      </linearGradient>
    </defs>
  </motion.svg>
}
