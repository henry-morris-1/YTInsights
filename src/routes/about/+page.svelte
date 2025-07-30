<script>
    import Section from "$lib/text/section.svelte";
    import Subsection from "$lib/text/subsection.svelte";
    import Heading from "$lib/text/heading.svelte";
    import Subheading from "$lib/text/subheading.svelte";
    import Paragraph from "$lib/text/paragraph.svelte";
    import BlockQuote from "$lib/text/block-quote.svelte";
    import CodeBlock from "$lib/text/code-block.svelte";
</script>

<div class="mt-25 w-screen max-w-[900px]">
    <Heading>Psychological Background</Heading>
    <Section>
        <Subsection>
            <Paragraph>
                The psychological impact of thumbnails and titles plays a critical role in shaping viewer behavior on YouTube.
                Visual features like brightness, edge density, and color contrast capture attention by leveraging principles of
                visual saliency—our brains are hard-wired to notice high-contrast or detailed areas quickly. Titles, meanwhile,
                trigger cognitive biases through emotional language, urgency, or curiosity—such as in the use of clickbait phrasing
                or questions—which tap into the psychological phenomenon known as the “curiosity gap.” These elements influence not
                only whether users notice a video but whether they feel compelled to click, making them central to predicting virality
                and optimizing content performance before a video is even published.
            </Paragraph>
        </Subsection>

        <Subsection>
            <BlockQuote attribution={'Nuthmann & Henderson, 2010'}>
                The visual complexity of an image, as perceived by edge density and local color contrast, increases the likelihood
                of gaze fixation in the first few milliseconds.
            </BlockQuote>
        </Subsection>
    </Section>

    <Heading>Important Feature Genres</Heading>
    <Section>
        <Subheading>Clickbait Score Calculation</Subheading>
        <Subsection>
            <CodeBlock>
                def compute_clickbait_score(text: str) -> float:
                    clickbait_words = {
                        "amazing", "shocking", "unbelievable", "top", "ultimate", "must",
                        "insane", "you won't believe", "secret", "revealed", "hack"
                    }
                    words = text.split()
                    clickbait_score = sum(word.lower() in clickbait_words for word in words)
                    return clickbait_score
            </CodeBlock>
            <Paragraph>
                The clickbait score is a simple metric that counts the number of clickbait words in a given text.
                It can be useful for identifying potentially misleading or sensational content.
            </Paragraph>
        </Subsection>
        
        <Subheading>Readability Score Calculation</Subheading>
        <Subsection>
            <CodeBlock>
                def flesch_reading_ease(text):
                    sentences = re.split(r'[.!?]+', text)
                    sentences = [s.strip() for s in sentences if s.strip()]

                    words = re.findall(r'\w+', text)
                    num_sentences = max(1, len(sentences))
                    num_words = max(1, len(words))
                    num_syllables = sum(count_syllables(word) for word in words)

                    asl = num_words / num_sentences  # Average sentence length
                    asw = num_syllables / num_words  # Average syllables per word

                    # Flesch Reading Ease formula
                    score = 206.835 - (1.015 * asl) - (84.6 * asw)
                    return round(score, 2)
            </CodeBlock>
            <Paragraph>
                The Flesch Reading Ease score is a widely used readability test that evaluates the complexity of English texts.
                It considers the average sentence length and the average number of syllables per word to produce a score between 0 and 100,
                where higher scores indicate easier readability.
            </Paragraph>
        </Subsection>

        <Subheading>Training Data</Subheading>
        <Subsection>
            <Paragraph>
                The training data consists of over 100,000 YouTube videos taken from channels serving a broad variety of genres in each significant
                subscriber range that have been judged by human experts to be “reliant on the YouTube algorithm.” This ensures the model learns
                from content aiming to optimize for virality and engagement rather than content that performs purely due to an already-established
                audience or brand.
            </Paragraph>
        </Subsection>

        <Subheading>Model Architecture</Subheading>
        <Subsection>
            <Paragraph>
                The model supporting this tool's insights is trained to recognize patterns in pre-publication metadata that correlate with higher
                likelihoods of content performance. It leverages a Random Forest classifier enhanced with SMOTE (Synthetic Minority Oversampling
                Technique) to address class imbalance while focusing on psychologically and behaviorally relevant features.
            </Paragraph>
        </Subsection>
    </Section>
</div>
