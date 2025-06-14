/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
			screens: {
				'hd': '1360px'
			},
  		fontFamily: {
  			pingFangSCRegular: [
  				'PingFangSCRegular',
  				'sans-serif'
  			],
  			pingFangSCLight: [
  				'PingFangSCLight',
  				'sans-serif'
  			],
				gilroy: [
					'Gilroy',
					'sans-serif'
				],
				gilroyMedium: [
					'GilroyMedium',
					'sans-serif'
				],
				gilroyBlack: [
					'GilroyBlack',
					'sans-serif'
				],
				gilroyLight: [
					'GilroyLight',
					'sans-serif'
				],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(var(--marquee-translate))'
  				}
  			},
  			'marquee-reverse': {
  				'0%': {
  					transform: 'translateX(var(--marquee-translate))'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			},
				
				'arrow-transition': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0%)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(var(--arrow-translateX))'
					}
				},
				'arrow-transition-y': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0%)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(var(--arrow-translateY))'
					}
				}
  		},
  		animation: {
  			marquee: 'marquee 13s linear infinite',
				'marquee-reverse': 'marquee-reverse 13s linear infinite',
				'arrow-transition': 'arrow-transition 1s linear infinite',
				'arrow-transition-y': 'arrow-transition-y 1s linear infinite'
  		},
  		// borderRadius: {
  		// 	lg: 'var(--radius)',
  		// 	md: 'calc(var(--radius) - 2px)',
  		// 	sm: 'calc(var(--radius) - 4px)'
  		// },
  		// colors: {
  		// 	background: 'hsl(var(--background))',
  		// 	foreground: 'hsl(var(--foreground))',
  		// 	card: {
  		// 		DEFAULT: 'hsl(var(--card))',
  		// 		foreground: 'hsl(var(--card-foreground))'
  		// 	},
  		// 	popover: {
  		// 		DEFAULT: 'hsl(var(--popover))',
  		// 		foreground: 'hsl(var(--popover-foreground))'
  		// 	},
  		// 	primary: {
  		// 		DEFAULT: 'hsl(var(--primary))',
  		// 		foreground: 'hsl(var(--primary-foreground))'
  		// 	},
  		// 	secondary: {
  		// 		DEFAULT: 'hsl(var(--secondary))',
  		// 		foreground: 'hsl(var(--secondary-foreground))'
  		// 	},
  		// 	muted: {
  		// 		DEFAULT: 'hsl(var(--muted))',
  		// 		foreground: 'hsl(var(--muted-foreground))'
  		// 	},
  		// 	accent: {
  		// 		DEFAULT: 'hsl(var(--accent))',
  		// 		foreground: 'hsl(var(--accent-foreground))'
  		// 	},
  		// 	destructive: {
  		// 		DEFAULT: 'hsl(var(--destructive))',
  		// 		foreground: 'hsl(var(--destructive-foreground))'
  		// 	},
  		// 	border: 'hsl(var(--border))',
  		// 	input: 'hsl(var(--input))',
  		// 	ring: 'hsl(var(--ring))',
  		// 	chart: {
  		// 		'1': 'hsl(var(--chart-1))',
  		// 		'2': 'hsl(var(--chart-2))',
  		// 		'3': 'hsl(var(--chart-3))',
  		// 		'4': 'hsl(var(--chart-4))',
  		// 		'5': 'hsl(var(--chart-5))'
  		// 	}
  		// }
  	}
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* For most modern browsers */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        }
      });
    },
      require("tailwindcss-animate")
],
}