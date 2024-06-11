import Image from "next/image";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    
      <div className=" p-6 overflow-y-auto h-80vh">
        <h1 className="text-3xl font-bold mb-4">Welcome to Next.js</h1>
        {/* Add your content here */}
        <div>
          <p className="text-lg">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ullamcorper lacus, eget tincidunt nunc. Donec vitae dui vel nisl condimentum ultricies.
                          Paragraphs are a concept that people are expected to learn during their high school years but people fail to grasp the importance of paragraph length. This is not an issue that I have seen on student papers but also on academic papers submitted to journals and conferences.

              So what is a long paragraph? It is a paragraph that feels a bit much but if I were to summarize it, here’s two identifiers:

              Paragraph consisting typically of more than 8 sentences.
              Paragraph that is not coherent.
              These are not rigid rules to be followed but rather guidelines where you need to at least ponder on whether you paragraph is unjustly too long.

              So what about coherence? Do not pack a bunch of content into one paragraph. For example, if you are listing a bunch 3–4 papers and their findings in a paragraph, it is acceptable to do so as long as you stay within e.g., 8 sentences. The further away that you are getting from this flexible target, the more likely it is that your paragraph is becoming too long. For example, in literature review a section make look like this:


              This expansion typically is in part due to the fact that especially in literature review sections, people tend to want to mention things about the referenced papers (often more than what is required). If a single paper that you are citing is summarized in 4–5 sentences then chances are it requires its own paragraph. But then the paragraphs may look as if they are appearing out of the blue. How do you fix that? You can use an intro paragraph for your subsection like the image below.


              It is a handy trick that can be used and highly effective for most sections of a research paper.

              Detecting long paragraphs automatically
              That got me wondering, is there an automated way to tell if your paragraphs are too long? Two applications that I am familiar with and can do this is Grammarly and Citasion although you need to use their premium version to get this feature (free versions have some features but not related to long paragraphs). Grammarly (starting $12/month) has no trial available for testing. Citasion (starting $2.99/month) has a three month trial for its premium features.

              I decided to test each on 3 texts that are intentionally too long. To simplify things, I used paragraphs from Wikipedia articles that were contiguous and just merged them into a larger paragraph.

              The first article was about earthquakes:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ullamcorper lacus, eget tincidunt nunc. Donec vitae dui vel nisl condimentum ultricies. Paragraphs are a concept that people are expected to learn during their high school years but people fail to grasp the importance of paragraph length. This is not an issue that I have seen on student papers but also on academic papers submitted to journals and conferences. So what is a long paragraph? It is a paragraph that feels a bit much but if I were to summarize it, here’s two identifiers: Paragraph consisting typically of more than 8 sentences. Paragraph that is not coherent. These are not rigid rules to be followed but rather guidelines where you need to at least ponder on whether you paragraph is unjustly too long. So what about coherence? Do not pack a bunch of content into one paragraph. For example, if you are listing a bunch 3–4 papers and their findings in a paragraph, it is acceptable to do so as long as you stay within e.g., 8 sentences. The further away that you are getting from this flexible target, the more likely it is that your paragraph is becoming too long. For example, in literature review a section make look like this: This expansion typically is in part due to the fact that especially in literature review sections, people tend to want to mention things about the referenced papers (often more than what is required). If a single paper that you are citing is summarized in 4–5 sentences then chances are it requires its own paragraph. But then the paragraphs may look as if they are appearing out of the blue. How do you fix that? You can use an intro paragraph for your subsection like the image below. It is a handy trick that can be used and highly effective for most sections of a research paper. Detecting long paragraphs automatically That got me wondering, is there an automated way to tell if your paragraphs are too long? Two applications that I am familiar with and can do this is Grammarly and Citasion although you need to use their premium version to get this feature (free versions have some features but not related to long paragraphs). Grammarly (starting $12/month) has no trial available for testing. Citasion (starting $2.99/month) has a three month trial for its premium features. I decided to test each on 3 texts that are intentionally too long. To simplify things, I used paragraphs from Wikipedia articles that were contiguous and just merged them into a larger paragraph. The first article was about earthquakes:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ullamcorper lacus, eget tincidunt nunc. Donec vitae dui vel nisl condimentum ultricies.
                          Paragraphs are a concept that people are expected to learn during their high school years but people fail to grasp the importance of paragraph length. This is not an issue that I have seen on student papers but also on academic papers submitted to journals and conferences.

              So what is a long paragraph? It is a paragraph that feels a bit much but if I were to summarize it, here’s two identifiers:

              Paragraph consisting typically of more than 8 sentences.
              Paragraph that is not coherent.
              These are not rigid rules to be followed but rather guidelines where you need to at least ponder on whether you paragraph is unjustly too long.

              So what about coherence? Do not pack a bunch of content into one paragraph. For example, if you are listing a bunch 3–4 papers and their findings in a paragraph, it is acceptable to do so as long as you stay within e.g., 8 sentences. The further away that you are getting from this flexible target, the more likely it is that your paragraph is becoming too long. For example, in literature review a section make look like this:


              This expansion typically is in part due to the fact that especially in literature review sections, people tend to want to mention things about the referenced papers (often more than what is required). If a single paper that you are citing is summarized in 4–5 sentences then chances are it requires its own paragraph. But then the paragraphs may look as if they are appearing out of the blue. How do you fix that? You can use an intro paragraph for your subsection like the image below.


              It is a handy trick that can be used and highly effective for most sections of a research paper.

              Detecting long paragraphs automatically
              That got me wondering, is there an automated way to tell if your paragraphs are too long? Two applications that I am familiar with and can do this is Grammarly and Citasion although you need to use their premium version to get this feature (free versions have some features but not related to long paragraphs). Grammarly (starting $12/month) has no trial available for testing. Citasion (starting $2.99/month) has a three month trial for its premium features.

              I decided to test each on 3 texts that are intentionally too long. To simplify things, I used paragraphs from Wikipedia articles that were contiguous and just merged them into a larger paragraph.

              The first article was about earthquakes:
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ullamcorper lacus, eget tincidunt nunc. Donec vitae dui vel nisl condimentum ultricies. Paragraphs are a concept that people are expected to learn during their high school years but people fail to grasp the importance of paragraph length. This is not an issue that I have seen on student papers but also on academic papers submitted to journals and conferences. So what is a long paragraph? It is a paragraph that feels a bit much but if I were to summarize it, here’s two identifiers: Paragraph consisting typically of more than 8 sentences. Paragraph that is not coherent. These are not rigid rules to be followed but rather guidelines where you need to at least ponder on whether you paragraph is unjustly too long. So what about coherence? Do not pack a bunch of content into one paragraph. For example, if you are listing a bunch 3–4 papers and their findings in a paragraph, it is acceptable to do so as long as you stay within e.g., 8 sentences. The further away that you are getting from this flexible target, the more likely it is that your paragraph is becoming too long. For example, in literature review a section make look like this: This expansion typically is in part due to the fact that especially in literature review sections, people tend to want to mention things about the referenced papers (often more than what is required). If a single paper that you are citing is summarized in 4–5 sentences then chances are it requires its own paragraph. But then the paragraphs may look as if they are appearing out of the blue. How do you fix that? You can use an intro paragraph for your subsection like the image below. It is a handy trick that can be used and highly effective for most sections of a research paper. Detecting long paragraphs automatically That got me wondering, is there an automated way to tell if your paragraphs are too long? Two applications that I am familiar with and can do this is Grammarly and Citasion although you need to use their premium version to get this feature (free versions have some features but not related to long paragraphs). Grammarly (starting $12/month) has no trial available for testing. Citasion (starting $2.99/month) has a three month trial for its premium features. I decided to test each on 3 texts that are intentionally too long. To simplify things, I used paragraphs from Wikipedia articles that were contiguous and just merged them into a larger paragraph. The first article was about earthquakes:
 
                        </p>
          {/* Add more content as needed */}
        </div>
      </div>
   
  );
}
