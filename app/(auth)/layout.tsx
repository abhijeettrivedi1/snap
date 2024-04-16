
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <div className="bg-red-400 h-screen">
            {children}
        </div>
          
    
    );
  }