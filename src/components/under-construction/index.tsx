import { Typography } from "@mui/material";

function UnderConstruction() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <svg
          width="100"
          height="99"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.99 15.99L14.05 11.05L11.93 13.17L16.87 18.11C17.46 18.7 18.41 18.7 18.99 18.11C19.57 17.52 19.57 16.57 18.99 15.99ZM15.65 8C17.58 8 19.15 6.43 19.15 4.5C19.15 3.92 18.99 3.38 18.74 2.9L16.04 5.6L14.55 4.11L17.25 1.41C16.77 1.16 16.23 1 15.65 1C13.72 1 12.15 2.57 12.15 4.5C12.15 4.91 12.23 5.3 12.36 5.66L10.51 7.51L8.73 5.73C8.82271 5.63749 8.89625 5.5276 8.94644 5.40662C8.99662 5.28565 9.02245 5.15597 9.02245 5.025C9.02245 4.89403 8.99662 4.76435 8.94644 4.64338C8.89625 4.5224 8.82271 4.41251 8.73 4.32L8.02 3.61L10.14 1.49C9.5775 0.928199 8.81501 0.61264 8.02 0.61264C7.225 0.61264 6.46251 0.928199 5.9 1.49L3.08 4.32C2.9873 4.41251 2.91375 4.5224 2.86357 4.64338C2.81339 4.76435 2.78756 4.89403 2.78756 5.025C2.78756 5.15597 2.81339 5.28565 2.86357 5.40662C2.91375 5.5276 2.9873 5.63749 3.08 5.73L3.79 6.44H1.25C1.06 6.44 0.880004 6.51 0.750004 6.65C0.683484 6.71518 0.630638 6.79297 0.594561 6.87883C0.558484 6.96468 0.539902 7.05687 0.539902 7.15C0.539902 7.24313 0.558484 7.33532 0.594561 7.42118C0.630638 7.50703 0.683484 7.58482 0.750004 7.65L3.29 10.19C3.35518 10.2565 3.43297 10.3094 3.51883 10.3454C3.60469 10.3815 3.69688 10.4001 3.79 10.4001C3.88313 10.4001 3.97532 10.3815 4.06118 10.3454C4.14703 10.3094 4.22483 10.2565 4.29 10.19C4.42 10.06 4.5 9.88 4.5 9.69V7.15L5.2 7.85C5.59 8.24 6.22 8.24 6.61 7.85L8.39 9.63L2.04 15.98C1.89971 16.1186 1.78833 16.2836 1.71231 16.4656C1.63629 16.6476 1.59714 16.8428 1.59714 17.04C1.59714 17.2372 1.63629 17.4324 1.71231 17.6144C1.78833 17.7964 1.89971 17.9614 2.04 18.1C2.63 18.69 3.58 18.69 4.16 18.1L14.48 7.79C14.85 7.92 15.24 8 15.65 8Z"
            fill="white"
          />
        </svg>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(to right, #ff8a00, #e52e71)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          UNDER CONSTRUCTION
        </Typography>
      </div>
    </div>
  );
}

export default UnderConstruction;
