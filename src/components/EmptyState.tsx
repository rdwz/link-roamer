import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const EmptyState = () => (
  <Center py={20} flexDirection="column">
    <Box mb={4}>
      <EmptyStateGraphic />
    </Box>
    <Box textAlign="center" maxW="375px">
      <Heading fontSize="xl" mb={2}>
        No links to show
      </Heading>
      <Text>
        Try different keywords in the search filter or on the off-chance you
        found a site with no links; congratulations, that doesn&apos;t happen
        very often.
      </Text>
    </Box>
  </Center>
)

const EmptyStateGraphic = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 108 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="54" cy="54" r="54" fill="#EAEAEA" />
    <path
      d="M34.6929 50.24C35.4001 50.332 36.1149 50.1392 36.68 49.7041C37.2452 49.269 37.6143 48.6273 37.7062 47.92C37.7982 47.2128 37.6054 46.498 37.1703 45.9329C36.7352 45.3678 36.0935 44.9986 35.3862 44.9067L30.6929 43.7334C30.3507 43.6285 29.9909 43.5935 29.635 43.6306C29.279 43.6677 28.9342 43.776 28.621 43.9492C28.3078 44.1224 28.0326 44.3568 27.8119 44.6386C27.5913 44.9203 27.4296 45.2436 27.3364 45.5892C27.2433 45.9347 27.2208 46.2955 27.27 46.65C27.3193 47.0045 27.4394 47.3454 27.6232 47.6525C27.807 47.9596 28.0507 48.2265 28.3399 48.4374C28.629 48.6483 28.9577 48.7988 29.3062 48.88L33.9996 50.1334C34.223 50.2079 34.4574 50.244 34.6929 50.24V50.24ZM44.9862 35.3334C45.1425 35.9151 45.4911 36.4268 45.9754 36.7852C46.4596 37.1435 47.0509 37.3273 47.6529 37.3067C47.8825 37.3436 48.1166 37.3436 48.3462 37.3067C49.0231 37.1195 49.5987 36.6728 49.9482 36.0637C50.2977 35.4546 50.3928 34.7322 50.2129 34.0534L48.9596 29.36C48.8784 29.0115 48.7278 28.6828 48.5169 28.3937C48.306 28.1045 48.0391 27.8608 47.732 27.677C47.4249 27.4932 47.084 27.3731 46.7295 27.3238C46.375 27.2746 46.0143 27.2971 45.6687 27.3903C45.3231 27.4834 44.9999 27.6451 44.7181 27.8658C44.4364 28.0864 44.2019 28.3616 44.0287 28.6748C43.8556 28.988 43.7472 29.3328 43.7101 29.6888C43.673 30.0447 43.708 30.4045 43.8129 30.7467L44.9862 35.3334ZM57.8662 62C57.6171 61.7378 57.3172 61.529 56.9849 61.3863C56.6525 61.2436 56.2946 61.17 55.9329 61.17C55.5712 61.17 55.2133 61.2436 54.8809 61.3863C54.5485 61.529 54.2487 61.7378 53.9996 62L44.6662 71.4934C43.5689 72.5462 42.107 73.134 40.5862 73.134C39.0655 73.134 37.6036 72.5462 36.5062 71.4934C35.966 70.96 35.5371 70.3248 35.2444 69.6244C34.9516 68.924 34.8009 68.1725 34.8009 67.4134C34.8009 66.6543 34.9516 65.9027 35.2444 65.2023C35.5371 64.5019 35.966 63.8667 36.5062 63.3334L45.9996 54C46.2787 53.761 46.5054 53.4668 46.6655 53.1359C46.8256 52.8051 46.9155 52.4448 46.9297 52.0775C46.9439 51.7103 46.882 51.344 46.7479 51.0018C46.6139 50.6596 46.4105 50.3488 46.1506 50.089C45.8907 49.8291 45.58 49.6257 45.2378 49.4917C44.8956 49.3576 44.5293 49.2957 44.1621 49.3099C43.7948 49.3241 43.4345 49.414 43.1036 49.5741C42.7728 49.7342 42.4786 49.9609 42.2396 50.24L32.6662 59.5467C31.6297 60.5833 30.8074 61.8138 30.2464 63.1682C29.6854 64.5225 29.3967 65.9741 29.3967 67.44C29.3967 68.906 29.6854 70.3575 30.2464 71.7119C30.8074 73.0662 31.6297 74.2968 32.6662 75.3334C33.7028 76.3699 34.9334 77.1922 36.2877 77.7532C37.6421 78.3142 39.0936 78.6029 40.5596 78.6029C42.0255 78.6029 43.4771 78.3142 44.8314 77.7532C46.1857 77.1922 47.4163 76.3699 48.4529 75.3334L57.8662 65.92C58.1369 65.6703 58.3529 65.3672 58.5007 65.0299C58.6484 64.6926 58.7247 64.3283 58.7247 63.96C58.7247 63.5918 58.6484 63.2275 58.5007 62.8901C58.3529 62.5528 58.1369 62.2497 57.8662 62ZM35.8129 39.5734C36.3096 40.066 36.98 40.3437 37.6796 40.3467C38.0305 40.3487 38.3784 40.2815 38.7033 40.1488C39.0282 40.016 39.3237 39.8205 39.5729 39.5734C40.0696 39.0737 40.3483 38.3979 40.3483 37.6934C40.3483 36.9889 40.0696 36.313 39.5729 35.8134L36.1329 32.3734C35.6228 31.9365 34.9666 31.7082 34.2954 31.7341C33.6243 31.7601 32.9876 32.0383 32.5127 32.5132C32.0378 32.9881 31.7596 33.6247 31.7337 34.2959C31.7077 34.967 31.936 35.6232 32.3729 36.1334L35.8129 39.5734ZM78.6929 59.12L73.9996 57.8667C73.6518 57.7465 73.2828 57.6995 72.916 57.7289C72.5492 57.7582 72.1924 57.8631 71.8681 58.037C71.5438 58.2109 71.259 58.4501 71.0316 58.7394C70.8043 59.0288 70.6392 59.3621 70.547 59.7183C70.4547 60.0745 70.4371 60.446 70.4954 60.8093C70.5537 61.1727 70.6865 61.52 70.8856 61.8296C71.0846 62.1391 71.3456 62.404 71.6521 62.6077C71.9585 62.8115 72.3038 62.9496 72.6662 63.0134L77.3596 64.2667H78.0529C78.7601 64.3586 79.4749 64.1659 80.04 63.7308C80.6052 63.2957 80.9743 62.6539 81.0662 61.9467C81.1582 61.2394 80.9654 60.5246 80.5303 59.9595C80.0952 59.3944 79.4535 59.0253 78.7462 58.9334L78.6929 59.12ZM63.0129 72.6667C62.9203 72.3286 62.762 72.0121 62.547 71.7353C62.332 71.4585 62.0645 71.2267 61.7599 71.0534C61.4553 70.88 61.1194 70.7684 60.7716 70.7249C60.4238 70.6814 60.0708 70.707 59.7329 70.8C59.0561 70.9873 58.4804 71.4339 58.1309 72.043C57.7814 72.6522 57.6863 73.3745 57.8662 74.0534L59.1196 78.7467C59.2758 79.3285 59.6245 79.8402 60.1087 80.1985C60.5929 80.5568 61.1842 80.7407 61.7862 80.72C62.0166 80.7462 62.2492 80.7462 62.4796 80.72C62.82 80.6303 63.1394 80.4741 63.4192 80.2603C63.6989 80.0465 63.9336 79.7795 64.1096 79.4745C64.2856 79.1696 64.3995 78.8328 64.4447 78.4836C64.4899 78.1344 64.4655 77.7797 64.3729 77.44L63.0129 72.6667ZM72.1862 68.48C71.6761 68.0432 71.0199 67.8149 70.3488 67.8408C69.6776 67.8667 69.041 68.1449 68.5661 68.6199C68.0911 69.0948 67.8129 69.7314 67.787 70.4026C67.7611 71.0737 67.9894 71.7299 68.4262 72.24L71.8662 75.68C72.3659 76.1767 73.0417 76.4555 73.7462 76.4555C74.4507 76.4555 75.1266 76.1767 75.6262 75.68C76.1229 75.1804 76.4017 74.5045 76.4017 73.8C76.4017 73.0955 76.1229 72.4197 75.6262 71.92L72.1862 68.48ZM78.5329 40.6667C78.5743 38.4492 77.9501 36.2702 76.7409 34.411C75.5316 32.5517 73.7928 31.0977 71.7489 30.2365C69.705 29.3753 67.45 29.1466 65.2748 29.5798C63.0996 30.0129 61.1042 31.0882 59.5462 32.6667L50.1329 42.16C49.8808 42.4139 49.6811 42.715 49.5453 43.046C49.4095 43.3771 49.3403 43.7316 49.3415 44.0895C49.3427 44.4473 49.4144 44.8013 49.5525 45.1314C49.6906 45.4615 49.8923 45.7612 50.1462 46.0134C50.4001 46.2655 50.7012 46.4652 51.0322 46.6009C51.3633 46.7367 51.7178 46.806 52.0757 46.8047C52.4335 46.8035 52.7875 46.7318 53.1176 46.5937C53.4477 46.4557 53.7474 46.2539 53.9996 46L63.3329 36.5067C64.4303 35.4539 65.8921 34.866 67.4129 34.866C68.9336 34.866 70.3955 35.4539 71.4929 36.5067C72.0331 37.04 72.462 37.6753 72.7547 38.3757C73.0475 39.076 73.1982 39.8276 73.1982 40.5867C73.1982 41.3458 73.0475 42.0973 72.7547 42.7977C72.462 43.4981 72.0331 44.1334 71.4929 44.6667L61.9996 54C61.5029 54.4997 61.2241 55.1755 61.2241 55.88C61.2241 56.5845 61.5029 57.2604 61.9996 57.76C62.4992 58.2567 63.1751 58.5355 63.8796 58.5355C64.5841 58.5355 65.2599 58.2567 65.7596 57.76L75.3329 48.4534C77.374 46.3743 78.5222 43.5802 78.5329 40.6667V40.6667Z"
      fill="#555970"
    />
  </svg>
)

export default EmptyState
