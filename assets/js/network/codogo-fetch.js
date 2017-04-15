export default (opts) => fetch(
	"https://kuwzxzx5a6.execute-api.eu-west-1.amazonaws.com/local/fetch",
	{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(opts),
	}
);
