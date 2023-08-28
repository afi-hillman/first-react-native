import axios from "axios";

export const fetchAllJobs = async () =>
  await axios
    .get(
      "https://raw.githubusercontent.com/irsyadSET2023/kerja-it-cone/main/src/assets/job-directory-data.json"
    )
    .then((res) => res.data);

export const fetchJobById = async (id) =>
  await axios
    .get(
      "https://raw.githubusercontent.com/irsyadSET2023/kerja-it-cone/main/src/assets/job-directory-data.json"
    )
    .then((res) => res.data.find((item) => item.id === id));
