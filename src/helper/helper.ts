


export  const   updateUser = async (url:string ,userId:string) => {
    const res = await fetch("/api/updateuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url , userId: session?.user?.userId}),
    });
    if (res.ok) {
     // update user
    }
    
  }