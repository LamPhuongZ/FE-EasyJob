import data from '../datas/address.json';

export const useAddress = () => {
  // Hàm lấy danh sách tỉnh/thành phố
  const getProvinces = () => {
    return data.province || [];
  };

  // Hàm lấy danh sách quận/huyện dựa trên provinceId
  const getDistrictsByProvinceId = (provinceId: string | number) => {
    return data.district.filter((district) => district.provinceId === String(provinceId));
  };

  // Hàm lấy district dựa trên districtId
  const getDistrict = (districtId: string | number) => {
    return data.district.find((district) => district.id === String(districtId));
  };

  // Hàm lấy province dựa trên provinceId
  const getProvince = (provinceId: string | number) => {
    return data.province.find((province) => province.id === String(provinceId));
  };

  return {
    getProvinces,
    getDistrictsByProvinceId,
    getDistrict,
    getProvince,
  };
};
