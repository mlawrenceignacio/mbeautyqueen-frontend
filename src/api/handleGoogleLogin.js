export const handleGoogleLogin = () => {
  const platform = "web";
  window.location.href = `${
    import.meta.env.VITE_API_URL
  }/auth/google?platform=${platform}`;
};
