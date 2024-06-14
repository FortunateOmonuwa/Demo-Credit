import axios from "axios";

export const checkKarmaBlacklist = async (identity: string) => {
  try {
    const response = await axios.get(
      `https://adjutor.lendsqr.com/v2/verification/karma/${identity}`
    );

    if (
      response.data.status === "success" &&
      response.data.data &&
      response.data.data.karma_type
    ) {
      return response.data.data.karma_type.karma === "Others";
    }

    return false;
  } catch (error) {
    return false;
  }
};
