import {
    Input,
    Checkbox,
    Button,
    Box, FormControl,CssTextField, Stack
} from "@material-tailwind/react";

export default function LoginForm() {
  const handleSubmit1 = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      remember: data.get("remember"),
    });
  };

return (
    <Box
      component="form"
      onSubmit={handleSubmit1}
      noValidate
      autoComplete="off"
      sx={{ mt: 1 }}
    >
      <FormControl sx={{ width: "60ch" }}>
        <CssTextField
          type="email"
          id="email"
          name="email"
          label="Username or email"
          variant="standard"
          fullWidth
          required
          autoComplete="off"
        />
        <CssTextField
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
          variant="standard"
          fullWidth
          Validators
          required
        />
      </FormControl>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="medium">
          LOGIN
        </Button>
      </Stack>
    </Box>
  );
}