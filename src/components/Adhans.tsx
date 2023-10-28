import { Table } from "antd";
import { useEffect, useState } from "react";
import { getAzanTimes } from "../api";
import moment from "moment";

const { Column } = Table;

type prayerType = {
  name: string;
  begins: string;
  iqamah: string;
};

const Adhans = () => {
  const address = "Richardson Dallas Texas ,USA";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [prayerTimes, setPrayerTimes] = useState<any>(null);
  const [prayerData, setPrayerData] = useState<prayerType[]>([]);

  const getPrayerTimes = async () => {
    const azanTimes = await getAzanTimes(address);
    setPrayerTimes(azanTimes.data.timings);
  };

  useEffect(() => {
    if (prayerTimes === null) {
      getPrayerTimes();
    }
    console.log(prayerTimes);
  }, []);

  useEffect(() => {
    if (prayerTimes !== null) {
      console.log(prayerTimes);
      setPrayerData([
        {
          name: "Fajr",
          begins: moment(prayerTimes.Fajr, ["HH:mm"]).format("hh:mm A"),
          iqamah: "07:00 AM",
        },
        {
          name: "Sunrise",
          begins: moment(prayerTimes.Sunrise, ["HH:mm"]).format("hh:mm A"),
          iqamah: "07:00 AM",
        },
        // { name: "Sunrise", begins: prayerTimes.Sunrise, iqamah: "14:00" },
        {
          name: "Dhuhr",
          begins: moment(prayerTimes.Dhuhr, ["HH:mm"]).format("hh:mm A"),
          iqamah: "02:00 PM",
        },
        {
          name: "Asr",
          begins: moment(prayerTimes.Asr, ["HH:mm"]).format("hh:mm A"),
          iqamah: "05:00 PM",
        },
        {
          name: "Maghrib",
          begins: moment(prayerTimes.Maghrib, ["HH:mm"]).format("hh:mm A"),
          iqamah: "07:00 PM",
        },
        {
          name: "Isha",
          begins: moment(prayerTimes.Isha, ["HH:mm"]).format("hh:mm A"),
          iqamah: "08:30 PM",
        },
        { name: "Jumuah", begins: "02:00 PM", iqamah: "" },
      ]);
    }
  }, [prayerTimes]);

  return (
    <div className="adhans">
      {prayerData.length > 0 ? (
        <Table dataSource={prayerData} pagination={false}>
          <Column title="Prayer" dataIndex="name" key="name" />
          <Column title="Begins" dataIndex="begins" key="begins" />
          <Column title="Iqamah" dataIndex="iqamah" key="iqamah" />
        </Table>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Adhans;
