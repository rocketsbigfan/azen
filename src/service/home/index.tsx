import { create } from 'zustand';

interface ResourceInfoResult {
  totalStorage: number;
  activeDepins: number;
  userCount: number;
  createTime: string;
  mintedXazen: number;
  azenConnectDownload: number;
  id: number;
  gpuCount: number;
  totalRam: number;
  cpuCount: number;
  mau: number;
  dau: number;
}

interface ApiResponse {
  status: string;
  errCode: string | null;
  result: ResourceInfoResult;
  msg: string;
}

interface HomeGlobalState {
  resourceInfo: ResourceInfoResult | null; 
  loading: boolean;
  error: string | null;
  hasFetched: boolean;
  fetchResourceInfo: () => Promise<void>;
}


const homeStore = create<HomeGlobalState>((set, get) => ({
  resourceInfo: null,
  loading: true,
  error: null,
  hasFetched: false,
  fetchResourceInfo: async () => {
    try {
      if (get().hasFetched) {
        return;
      }
      console.log('Fetching data...'); // 添加日志
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/AzenBackend/depin/resourceInfo');
      const data = await response.json(); // 解析响应
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      console.log('API Response:', (data as any).result); // 打印 API 响应
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set({ resourceInfo: (data as any).result, loading: false,hasFetched: true });
    } catch (err) {
      // console.error('API Error:', err); // 打印错误信息
      // set({ error: 'Failed to fetch data', loading: false });
    }
  },
}));


export default homeStore;