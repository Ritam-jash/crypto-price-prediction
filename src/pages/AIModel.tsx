
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MailIcon } from "lucide-react";

const AIModel = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.location.href = "mailto:ritamjash8@gmail.com?subject=AI%20Model%20Early%20Access%20Request";
  };

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center">
      <div className="glass-card p-8 max-w-2xl w-full animate-fade-in text-center">
        <h1 className="text-3xl font-bold mb-6">AI Price Prediction Model</h1>
        
        <div className="relative mb-8 p-6 border border-primary/30 bg-primary/5 rounded-lg">
          <div className="absolute -top-3 left-4 bg-background px-2 text-primary text-sm">
            Status
          </div>
          <p className="text-lg mb-4">
            We're currently fine-tuning our prediction algorithms for optimal accuracy.
          </p>
          <p className="text-muted-foreground">
            Our AI model is being trained on historical market data and will be available soon.
          </p>
        </div>
        
        <div className="relative mb-8 p-6 border border-primary/30 bg-primary/5 rounded-lg">
          <div className="absolute -top-3 left-4 bg-background px-2 text-primary text-sm">
            Early Access
          </div>
          <p className="text-lg mb-4">
            Want early access to our AI prediction model?
          </p>
          <p className="text-muted-foreground mb-6">
            Connect with our development team to explore partnership opportunities and gain exclusive early access to our advanced trading algorithms.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/80 flex items-center gap-2"
            onClick={handleContactClick}
          >
            <MailIcon size={16} />
            Contact Development Team
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          className="mt-4 flex items-center gap-2"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default AIModel;
