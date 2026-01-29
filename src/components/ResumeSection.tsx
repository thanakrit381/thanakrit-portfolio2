import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">My Background</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            View my complete professional background, education, and skills.
          </p>
        </div>

        {/* Resume Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* PDF Preview */}
            <div className="flex items-center justify-center">
              <iframe
                src="/resume/Thanakrit_Chutiwongthanaphat-CV.pdf"
                className="w-full h-[120vh]"
                title="Resume Preview"
                style={{
                  border: "none",
                  height: "65vh",
                  width: "48vh",
                }}
              />
            </div>

            {/* Download Section */}
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
              <div className="flex items-center gap-3 text-muted-foreground">
                <FileText className="h-5 w-5" />
                <span className="text-sm">Thanakrit_Chutiwongthanaphat-CV.pdf</span>
              </div>
              <Button asChild size="lg" variant="hero">
                <a href="/resume/Thanakrit_Chutiwongthanaphat-CV.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
