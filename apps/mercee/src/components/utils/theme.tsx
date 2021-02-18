// Thêm các component design và variant ở đây

// Kết hợp CSS, nhất là kiếm pallete giữa các trang để tạo ra file theme

// https://www.tailwindtoolbox.com/
// https://tailwindcomponents.com/

// Color shades website
// https://javisperez.github.io/tailwindcolorshades/
// https://tailwind.ink/

// -------
// Button
// -------
export const ButtonBase = 'flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none';
export const ButtonVariant = {
  // primary: 'text-white bg-primary hover:bg-primary-hover',
  primary: 'text-white bg-gray-900 hover:bg-gray-900',
  secondary: 'text-white bg-gray-900 hover:bg-gray-900',
  elevation: 'text-white bg-gray-900 hover:bg-gray-900 shadow-upside',
};
export const ButtonDisable = 'text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300';
export const ButtonSize = {
  big: 'h-12 px-30px',
  normal: 'h-11 px-30px',
  small: 'h-9 text-13px px-20px',
};

// ------------
// Icon Button
// ------------
export const IconBtnBase = 'flex items-center justify-center outline-none transition-colors duration-250 ease-in-out';

// --------
// Counter
// --------
export const CounterBase = 'group flex items-center justify-between flex-shrink-0 rounded overflow-hidden bg-gray-900 shadow-floatingUp';

export const CounterValue = 'font-semibold text-13px text-white flex items-center justify-center h-full w-40px transition-colors duration-250 ease-in-out cursor-default';

export const CounterSize = {
  big: 'h-12',
  normal: 'h-35px',
};

// -----------------
// Input & Textarea
// -----------------
export const TextBoxCommonBase = 'w-full h-12 px-4 placeholder-gray-500 border border-transparent rounded outline-none transition duration-200';

export const TextBoxDisable = 'text-gray-500 bg-gray-300 cursor-not-allowed hover:bg-gray-300 hover:border-transparent focus:border-transparent focus:placeholder-gray-500';

export const TextBoxEnable = 'text-gray-900 bg-gray-f7 hover:border-gray-400 focus:border-black focus:placeholder-gray-900';

export const InputBase = 'h-12 px-4';

export const TextareaBase = 'h-120px p-4 resize-none';

// ----------
// Cart Item
// ----------
export const CartItemBase = 'w-full h-auto flex justify-start items-center bg-white px-30px py-6 border-b border-gray-200 relative last:border-b-0';

export const CartItemImage = 'flex w-105px h-105px rounded overflow-hidden bg-gray-200 mr-15px flex-shrink-0';

export const CartItemContent = 'flex flex-col w-full px-15px';

export const CartItemName = 'text-13px text-gray-900';

export const CartItemSinglePrice = 'text-13px text-gray-500 mt-5px mb-10px';

export const CartItemTotalWrapper = 'flex items-center justify-between';

export const CartItemTotalPrice = 'font-semibold text-16px text-gray-900 flex-shrink-0';

// --------
// Feature
// --------
export const FeatureBase = 'feature-block flex w-full items-start flex-row';
export const FeatureCounter = 'flex items-center justify-center w-70px h-70px rounded-full mr-20px bg-gray-300 flex-shrink-0 text-24px font-semibold';

export const FeatureContent = 'flex flex-col items-start';

export const FeatureTitle = 'w-full text-18px font-semibold text-gray-900 mt-0 mb-2';

export const FeatureDetails = 'w-full leading-6 text-14px';

// ---------------
// Call To Action
// ---------------
export const CTABase = 'w-full flex flex-col items-start px-30px py-45px bg-cover bg-center bg-no-repeat bg-gray-100 border border-gray-300 rounded overflow-hidden relative xxl:py-60px xxl:px-80px';

export const CTAContent = 'flex flex-col items-center lg:items-start relative z-10 w-full lg:max-w-half';

// ----------
// Item Card .... Height uthay dite hobe image theke
// ----------
export const ItemCardBase = 'w-full flex flex-col items-start cursor-pointer';
export const ItemCardImage = 'flex justify-center items-center w-full rounded overflow-hidden';
export const ItemCardContent = 'flex flex-col items-start mt-3';
export const ItemCardPrice = 'font-semibold text-gray-900 mb-2 text-16px';

// ----------
// SearchBox
// ----------
export const SearchBase = 'flex items-center justify-center w-full lg:max-w-screen-md rounded relative overflow-hidden';

export const SearchIconWrapper = 'absolute top-0 left-0 flex items-center justify-center h-full w-50px';

export const SearchInput = 'w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-gray-f7 border-2 border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900';

// --------------
// Section Title
// --------------
export const SectionTitleBase = 'flex flex-col items-center';

export const SectionTitleHeading = 'flex justify-center text-21px font-semibold text-center mb-2 text-gray-900 xxl:text-24px xxl:mb-10px';

export const SectionTitleSubTitle = 'flex justify-center text-left xxl:text-center';

// -----------------------
// Section Title with Bar
// -----------------------
export const SectionTitleBarBase = 'flex flex-col items-start relative pl-8';

export const SectionTitleBar = 'flex w-5px h-full bg-primary absolute top-0 left-0';

export const SectionTitleBarHeading = 'flex justify-start text-21px font-semibold text-left mb-2 text-gray-900 xxl:text-24px xxl:font-semibold xxl:mb-3';

export const SectionTitleBarSubTitle = 'flex justify-start text-left';

// ---------
// Carousel
// ---------
export const ButtonGroupBase = 'flex items-center absolute top-half w-full';

export const ArrowButtonBase = 'w-30px h-30px flex items-center justify-center rounded-full text-gray-00 bg-white shadow-navigation absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none';

export const PrevButtonRadius = 'left-0 ml-35px ';

export const NextButtonRadius = 'right-0 mr-35px';

export const ActiveDotsBase = 'w-6 bg-primary';

export const CarouselItemBase = 'overflow-hidden w-full flex rounded overflow-hidden';

export const CarouselItemImage = 'w-full h-full object-cover';

// ---------------
// Hero Carousel
// ---------------
export const NavButtonGroupBase = 'flex items-center absolute top-half w-full';

export const NavArrowButtonBase = 'w-30px h-30px flex items-center justify-center rounded-full text-gray-900 bg-white shadow-float absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none';

export const NavPrevButtonRadius = 'left-0 ml-10px md:ml-35px ';

export const NavNextButtonRadius = 'right-0 mr-10px md:mr-35px';

export const HeroCarouselBase = 'w-full flex items-center bg-cover px-40px md:px-60px lg:px-100px h-480px lg:h-400px xl:h-480px 2xxl:h-650px';

// ------------
// Testimonial
// ------------
export const TestimonialPrevButtonRadius = 'left-0 ml-10px lg:ml-35px';

export const TestimonialNextButtonRadius = 'right-0 mr-10px lg:mr-35px';

export const TestimonialBase = 'w-full bg-white flex flex-col rounded border border-gray-300 p-40px lg:p-50px pt-30px';

export const QuoteBase = 'text-gray-200 flex justify-center mb-30px';

export const TestimonialReview = 'text-16px text-gray-700 font-normal text-center mb-30px leading-7';

export const TestimonialReviewerBase = 'flex items-center justify-center';

export const TestimonialItemImageBase = 'overflow-hidden w-40px h-40px mr-15px bg-gray-100 flex rounded-full overflow-hidden shadow-floatingUp';

export const ReviewerName = 'text-16px text-gray-900 font-semibold text-center';
