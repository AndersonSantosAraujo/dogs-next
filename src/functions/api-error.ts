export default function apiError(error: unknown): {
  ok: false;
  error: string;
  data: null;
} {
  if (error instanceof Error) {
    // d:120724|h:2050 - comment line to test the workflow process
    return {
      ok: false,
      error: error.message,
      data: null,
    };
  } else {
    return {
      ok: false,
      error: "Something exploded!",
      data: null,
    };
  }
}
