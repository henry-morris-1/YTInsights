import"../chunks/DsnmJJEf.js";import"../chunks/DXyYrGeO.js";import{Q as d,M as x,O as t,R as h,U as v,T as s,V as c,W as B,an as l,K as C}from"../chunks/B76aRbw-.js";import{s as H}from"../chunks/D4YDfrxN.js";var j=d('<div class="flex flex-col mb-10"><!></div>');function A(o,r){var e=j(),n=h(e);x(n,()=>r.children),v(e),t(o,e)}var D=d('<div class="flex flex-col gap-4 mb-8"><!></div>');function k(o,r){var e=D(),n=h(e);x(n,()=>r.children),v(e),t(o,e)}var G=d('<div class="w-full mb-4"><h1 class="text-4xl font-bold"><!></h1> <div class="h-0.5 w-full bg-neutral-300"></div></div>');function O(o,r){var e=G(),n=h(e),g=h(n);x(g,()=>r.children),v(n),s(2),v(e),t(o,e)}var K=d('<h2 class="text-2xl font-bold mb-2"><!></h2>');function E(o,r){var e=K(),n=h(e);x(n,()=>r.children),v(e),t(o,e)}var N=d("<p><!></p>");function S(o,r){var e=N(),n=h(e);x(n,()=>r.children),v(e),t(o,e)}var Q=d('<div class="p-6 bg-neutral-700 rounded-lg font-semibold"><!> <div class="mt-3 italic font-light text-neutral-300"> </div></div>');function U(o,r){var e=Q(),n=h(e);x(n,()=>r.children);var g=c(n,2),F=h(g);v(g),v(e),B(()=>H(F,`– ${r.attribution??""}`)),t(o,e)}var W=d('<div class="p-6 bg-neutral-700 rounded-lg text-sm font-mono whitespace-pre-wrap"><!></div>');function V(o,r){var e=W(),n=h(e);x(n,()=>r.children),v(e),t(o,e)}var J=d("<!> <!>",1),L=d("<!> <!>",1),X=d("<!> <!>",1),Z=d("<!> <!> <!> <!> <!> <!> <!> <!>",1),ee=d('<div class="w-screen max-w-[900px]"><!> <!> <!> <!></div>');function oe(o){var r=ee(),e=h(r);O(e,{children:(m,I)=>{s();var u=l("Psychological Background");t(m,u)}});var n=c(e,2);A(n,{children:(m,I)=>{var u=J(),T=C(u);k(T,{children:(w,q)=>{S(w,{children:(y,z)=>{s();var P=l(`The psychological impact of thumbnails and titles plays a critical role in shaping viewer behavior on YouTube.
                Visual features like brightness, edge density, and color contrast capture attention by leveraging principles of
                visual saliency—our brains are hard-wired to notice high-contrast or detailed areas quickly. Titles, meanwhile,
                trigger cognitive biases through emotional language, urgency, or curiosity—such as in the use of clickbait phrasing
                or questions—which tap into the psychological phenomenon known as the “curiosity gap.” These elements influence not
                only whether users notice a video but whether they feel compelled to click, making them central to predicting virality
                and optimizing content performance before a video is even published.`);t(y,P)}})}});var R=c(T,2);k(R,{children:(w,q)=>{U(w,{attribution:"Nuthmann & Henderson, 2010",children:(y,z)=>{s();var P=l(`The visual complexity of an image, as perceived by edge density and local color contrast, increases the likelihood
                of gaze fixation in the first few milliseconds.`);t(y,P)}})}}),t(m,u)}});var g=c(n,2);O(g,{children:(m,I)=>{s();var u=l("Important Feature Genres");t(m,u)}});var F=c(g,2);A(F,{children:(m,I)=>{var u=Z(),T=C(u);E(T,{children:(i,f)=>{s();var a=l("Clickbait Score Calculation");t(i,a)}});var R=c(T,2);k(R,{children:(i,f)=>{var a=L(),b=C(a);V(b,{children:($,M)=>{s();var p=l();p.nodeValue=`def compute_clickbait_score(text: str) -> float:
                    clickbait_words = hack
                    words = text.split()
                    clickbait_score = sum(word.lower() in clickbait_words for word in words)
                    return clickbait_score`,t($,p)}});var _=c(b,2);S(_,{children:($,M)=>{s();var p=l(`The clickbait score is a simple metric that counts the number of clickbait words in a given text.
                It can be useful for identifying potentially misleading or sensational content.`);t($,p)}}),t(i,a)}});var w=c(R,2);E(w,{children:(i,f)=>{s();var a=l("Readability Score Calculation");t(i,a)}});var q=c(w,2);k(q,{children:(i,f)=>{var a=X(),b=C(a);V(b,{children:($,M)=>{s();var p=l(`def flesch_reading_ease(text):
                    sentences = re.split(r'[.!?]+', text)
                    sentences = [s.strip() for s in sentences if s.strip()]

                    words = re.findall(r'\\w+', text)
                    num_sentences = max(1, len(sentences))
                    num_words = max(1, len(words))
                    num_syllables = sum(count_syllables(word) for word in words)

                    asl = num_words / num_sentences  # Average sentence length
                    asw = num_syllables / num_words  # Average syllables per word

                    # Flesch Reading Ease formula
                    score = 206.835 - (1.015 * asl) - (84.6 * asw)
                    return round(score, 2)`);t($,p)}});var _=c(b,2);S(_,{children:($,M)=>{s();var p=l(`The Flesch Reading Ease score is a widely used readability test that evaluates the complexity of English texts.
                It considers the average sentence length and the average number of syllables per word to produce a score between 0 and 100,
                where higher scores indicate easier readability.`);t($,p)}}),t(i,a)}});var y=c(q,2);E(y,{children:(i,f)=>{s();var a=l("Training Data");t(i,a)}});var z=c(y,2);k(z,{children:(i,f)=>{S(i,{children:(a,b)=>{s();var _=l(`The training data consists of over 100,000 YouTube videos taken from channels serving a broad variety of genres in each significant
                subscriber range that have been judged by human experts to be “reliant on the YouTube algorithm.” This ensures the model learns
                from content aiming to optimize for virality and engagement rather than content that performs purely due to an already-established
                audience or brand.`);t(a,_)}})}});var P=c(z,2);E(P,{children:(i,f)=>{s();var a=l("Model Architecture");t(i,a)}});var Y=c(P,2);k(Y,{children:(i,f)=>{S(i,{children:(a,b)=>{s();var _=l(`The model supporting this tool's insights is trained to recognize patterns in pre-publication metadata that correlate with higher
                likelihoods of content performance. It leverages a Random Forest classifier enhanced with SMOTE (Synthetic Minority Oversampling
                Technique) to address class imbalance while focusing on psychologically and behaviorally relevant features.`);t(a,_)}})}}),t(m,u)}}),v(r),t(o,r)}export{oe as component};
