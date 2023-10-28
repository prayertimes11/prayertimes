import axios from "axios";

export async function getAzanTimes(address: string) {
  const res = await axios.get(
    `http://api.aladhan.com/v1/timingsByAddress?address=${address}`
  );

  if (!res.data) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}
